import { hash } from 'bcrypt'
import { db } from 'database/prismaClient'
import { AppError } from 'shared/errors/AppError'

interface ICreateUser {
  username: string
  password: string
}

export class CreateUserUseCase {
  async execute({ username, password }: ICreateUser) {
    const userExists = await db.user.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username
        }
      }
    })

    if (userExists) {
      throw new AppError('Nome de usuário já está em uso.')
    }

    if (username.length < 3) {
      throw new AppError('Nome de usuário deve ter no mínimo 3 caracteres.')
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    if (!passwordRegex.test(password)) {
      throw new AppError(
        'Senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número.'
      )
    }

    const hashedPassword = await hash(password, 10)

    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword
      }
    })

    if (!user) {
      throw new AppError(
        'Não foi possível cadastrar o usuário. Por favor, verifique os dados e tente novamente.',
        500
      )
    }

    const account = await db.account.create({
      data: {
        balance: 100
      }
    })

    await db.user.update({
      where: { id: user.id },
      data: {
        accountId: account.id
      }
    })

    return user
  }
}
