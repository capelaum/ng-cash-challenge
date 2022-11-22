import { Request, Response } from 'express'
import {
  IListTransactions,
  ListTransactionsUseCase
} from './ListTransactionsUseCase'

export class ListTransactionsController {
  async handle(req: Request, res: Response) {
    const { userId } = req
    const { createdAt, isOnlyCashOut, isOnlyCashIn } = req.query

    const listTransactionsUseCase = new ListTransactionsUseCase()

    const transactions = await listTransactionsUseCase.execute({
      userId,
      createdAt,
      isOnlyCashOut: isOnlyCashOut === 'true',
      isOnlyCashIn: isOnlyCashIn === 'true'
    } as IListTransactions)

    return res.json(transactions)
  }
}
