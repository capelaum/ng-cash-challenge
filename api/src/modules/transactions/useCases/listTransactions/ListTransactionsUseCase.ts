import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

export interface IListTransactions {
  userId: string
  createdAt?: string
  isOnlyCashOut?: boolean
  isOnlyCashIn?: boolean
}

export class ListTransactionsUseCase {
  async execute({
    userId,
    createdAt,
    isOnlyCashOut,
    isOnlyCashIn
  }: IListTransactions) {
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

    const transactionTypeFilter = [
      {
        debitedAccountId: account.id
      },
      {
        creditedAccountId: account.id
      }
    ]

    if (isOnlyCashOut) {
      transactionTypeFilter.splice(1, 1)
    }

    if (isOnlyCashIn) {
      transactionTypeFilter.splice(0, 1)
    }

    const transactionsInitial = await db.transaction.findMany({
      where: {
        OR: transactionTypeFilter
      },
      select: {
        id: true,
        value: true,
        createdAt: true,
        debitedAccount: {
          select: {
            id: true,
            user: {
              select: {
                username: true
              }
            }
          }
        },
        creditedAccount: {
          select: {
            id: true,
            user: {
              select: {
                username: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const transactions = transactionsInitial.map(transaction => ({
      ...transaction,
      createdAt: new Date(transaction.createdAt).toLocaleDateString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
      }),
      value: Number(transaction.value)
    }))

    if (createdAt) {
      const filteredTransactions = transactions.filter(
        transaction => transaction.createdAt === createdAt
      )

      return filteredTransactions
    }

    return transactions
  }
}
