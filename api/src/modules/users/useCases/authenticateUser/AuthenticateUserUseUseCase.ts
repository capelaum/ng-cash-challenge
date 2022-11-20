import { compare } from 'bcrypt'
import { db } from 'database/prismaClient'
import { sign } from 'jsonwebtoken'
import { AppError } from 'shared/errors/AppError'

interface IAuthenticateUser {
  username: string
  password: string
}

export class AuthenticateUserUseUseCase {
  async execute({ username, password }: IAuthenticateUser) {
    const user = await db.user.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username
        }
      }
    })

    if (!user) {
      throw new AppError('Nome de usuário ou senha incorretos.')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Nome de usuário ou senha incorretos.')
    }

    const token = sign({ username }, process.env.JWT_SECRET ?? 'secret', {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }
}
