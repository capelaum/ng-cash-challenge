import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

interface ICheckBalance {
  userId: string
}

export class CheckBalanceUseCase {
  async execute({ userId }: ICheckBalance) {
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new AppError('Usuário não encontrado.', 404)
    }

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

    return account.balance
  }
}
