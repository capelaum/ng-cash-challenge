import { Request, Response } from 'express'
import { AuthenticateUserUseUseCase } from './AuthenticateUserUseUseCase'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateUserUseCase = new AuthenticateUserUseUseCase()

    const token = await authenticateUserUseCase.execute({ username, password })

    return response.status(200).json({ token })
  }
}
