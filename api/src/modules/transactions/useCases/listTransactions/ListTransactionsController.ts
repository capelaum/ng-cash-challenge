import { Request, Response } from 'express'
import { ListTransactionsUseCase } from './ListTransactionsUseCase'

export class ListTransactionsController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const listTransactionsUseCase = new ListTransactionsUseCase()

    const transactions = await listTransactionsUseCase.execute(userId)

    return res.json(transactions)
  }
}
