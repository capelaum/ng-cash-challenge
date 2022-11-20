import { Request, Response } from 'express'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'

export class CreateTransactionController {
  async handle(req: Request, res: Response) {
    const { userId } = req
    const { value, username } = req.body

    const createTransactionUseCase = new CreateTransactionUseCase()

    const transaction = await createTransactionUseCase.execute({
      userId,
      username,
      value
    })

    return res.status(201).json(transaction)
  }
}
