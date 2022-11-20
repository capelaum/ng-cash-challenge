import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from 'shared/errors/AppError'

interface IPayload {
  sub: string
}

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<NextFunction | AppError | void> {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('Você não tem permissão para acessar esse recurso.', 401)
  }

  const [, token] = authHeader.split(' ')

  if (!token) {
    throw new AppError('Você não tem permissão para acessar esse recurso.', 401)
  }

  try {
    const { sub: userId } = verify(
      token,
      process.env.JWT_TOKEN ?? 'secret'
    ) as IPayload

    req.userId = userId

    return next()
  } catch (error) {
    throw new AppError('Você não tem permissão para acessar esse recurso.', 401)
  }
}
