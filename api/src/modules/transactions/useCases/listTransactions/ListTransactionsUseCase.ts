import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

export interface IListTransactions {
  userId: string
  createdAt?: string
  isOnlyCashOut?: boolean
  isOnlyCashIn?: boolean
}

interface CreatedAtFilter {
  gte?: Date
  lt?: Date
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

    const createdAtFilter: CreatedAtFilter = {}

    if (createdAt) {
      // create createdAtDate with createdAt at UTC Timezone
      const createdAtDate = new Date(createdAt)

      const nextDayDate = new Date(
        new Date(createdAt).setDate(createdAtDate.getDate() + 1)
      )

      createdAtFilter.gte = createdAtDate
      createdAtFilter.lt = nextDayDate
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

    const transactions = await db.transaction.findMany({
      where: {
        OR: transactionTypeFilter,
        createdAt: createdAtFilter
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

    return transactions
  }
}
