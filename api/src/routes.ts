import { CheckBalanceController } from '@modules/accounts/useCases/checkBalanceUseCase/CheckBalanceController'
import { CreateTransactionController } from '@modules/transactions/useCases/createTransaction/CreateTransactionController'
import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { Router } from 'express'
import { isAuthenticated } from 'middlewares/isAuthenticated'

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const checkBalanceController = new CheckBalanceController()
const createTransactionController = new CreateTransactionController()

routes.post('/users', createUserController.handle)

routes.post('/login', authenticateUserController.handle)

routes.get('/account', isAuthenticated, checkBalanceController.handle)

routes.post('/transaction', isAuthenticated, createTransactionController.handle)

export { routes }
