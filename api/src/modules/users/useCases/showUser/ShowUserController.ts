import { Request, Response } from 'express'
import { ShowUserUseCase } from './ShowUserUseCase'

export class ShowUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request

    const showUserUseCase = new ShowUserUseCase()

    const user = await showUserUseCase.execute(userId)

    return response.json(user)
  }
}
