import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({ username, password })

    return response.status(201).json({
      id: user.id,
      username: user.username,
      created_at: user.createdAt,
      updated_at: user.updatedAt
    })
  }
}
