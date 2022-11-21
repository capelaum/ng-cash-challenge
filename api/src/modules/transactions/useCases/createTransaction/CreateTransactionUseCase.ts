import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

interface ICreateTransaction {
  value: number
  username: string
  userId: string
}

export class CreateTransactionUseCase {
  async execute({ value, username, userId }: ICreateTransaction) {
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new AppError('Usuário não encontrado.', 404)
    }

    if (user.username === username) {
      throw new AppError(
        'Você não pode transferir dinheiro para você mesmo.',
        400
      )
    }

    const debitedAccount = await db.account.findFirst({
      where: {
        user: {
          id: userId
        }
      }
    })

    if (!debitedAccount) {
      throw new AppError('Conta de origem não encontrada.', 404)
    }

    const debitedAccountBalance = Number(debitedAccount.balance)

    if (debitedAccountBalance < value) {
      throw new AppError('Saldo insuficiente.', 400)
    }

    const creditedAccount = await db.account.findFirst({
      where: {
        user: {
          username
        }
      }
    })

    if (!creditedAccount) {
      throw new AppError('Conta de destino não encontrada.', 404)
    }

    const updatedDebitedAccountBalance = debitedAccountBalance - value
    const updatedCreditAccountBalance = Number(creditedAccount.balance) + value

    const transaction = await db.$transaction([
      db.account.update({
        where: {
          id: debitedAccount.id
        },
        data: {
          balance: updatedDebitedAccountBalance
        }
      }),
      db.account.update({
        where: {
          id: creditedAccount.id
        },
        data: {
          balance: updatedCreditAccountBalance
        }
      }),
      db.transaction.create({
        data: {
          value,
          debitedAccountId: debitedAccount.id,
          creditedAccountId: creditedAccount.id
        }
      })
    ])

    return transaction
  }
}
