import { CheckBalanceController } from '@modules/accounts/useCases/checkBalanceUseCase/CheckBalanceController'
import { CreateTransactionController } from '@modules/transactions/useCases/createTransaction/CreateTransactionController'
import { ListTransactionsController } from '@modules/transactions/useCases/listTransactions/ListTransactionsController'
import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { ShowUserController } from '@modules/users/useCases/showUser/ShowUserController'
import { Router } from 'express'
import { isAuthenticated } from 'middlewares/isAuthenticated'

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const showUserController = new ShowUserController()
const checkBalanceController = new CheckBalanceController()
const createTransactionController = new CreateTransactionController()
const listTransactionsController = new ListTransactionsController()

routes.post('/users', createUserController.handle)

routes.post('/login', authenticateUserController.handle)

routes.get('/me', isAuthenticated, showUserController.handle)

routes.get('/account', isAuthenticated, checkBalanceController.handle)

routes.post(
  '/transactions',
  isAuthenticated,
  createTransactionController.handle
)

routes.get('/transactions', isAuthenticated, listTransactionsController.handle)

export { routes }
