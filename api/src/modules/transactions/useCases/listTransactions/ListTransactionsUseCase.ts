import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

export class ListTransactionsUseCase {
  async execute(userId: string) {
    const account = await db.account.findFirst({
      where: {
        user: {
          id: userId
        }
      }
    })

    if (!account) {
      throw new AppError('Conta não encontrada.', 404)
    }

    const transactions = await db.transaction.findMany({
      where: {
        OR: [
          {
            debitedAccountId: account.id
          },
          {
            creditedAccountId: account.id
          }
        ]
      }
    })

    return transactions
  }
}
