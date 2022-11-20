import { Request, Response } from 'express'
import { CheckBalanceUseCase } from './CheckBalanceUseCase'

export class CheckBalanceController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const checkBalanceUseCase = new CheckBalanceUseCase()

    const balance = await checkBalanceUseCase.execute({ userId })

    return res.status(200).json({ balance: Number(balance) })
  }
}
