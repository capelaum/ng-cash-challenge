import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

export class ShowUserUseCase {
  async execute(userId: string) {
    const user = await db.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        username: true,
        createdAt: true,
        updatedAt: true,
        account: {
          select: {
            id: true,
            balance: true
          }
        }
      }
    })

    if (!user) {
      throw new AppError('Conta não encontrada', 404)
    }

    return user
  }
}
