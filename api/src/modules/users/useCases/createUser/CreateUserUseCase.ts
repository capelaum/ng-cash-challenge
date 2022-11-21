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

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/

    if (!passwordRegex.test(password)) {
      throw new AppError(
        'Senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número.'
      )
    }

    const hashedPassword = await hash(password, 10)

    const user = await db.user.create({
      data: {
        username,
        password: hashedPassword,
        account: {
          create: {
            balance: 100
          }
        }
      }
    })

    if (!user) {
      throw new AppError(
        'Não foi possível realizar o cadastro. Por favor, verifique os dados e tente novamente.',
        500
      )
    }

    return user
  }
}
