import { CheckBalanceController } from '@modules/accounts/useCases/checkBalanceUseCase/CheckBalanceController'
import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { Router } from 'express'
import { isAuthenticated } from 'middlewares/isAuthenticated'

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const checkBalanceController = new CheckBalanceController()

routes.post('/users', createUserController.handle)

routes.post('/login', authenticateUserController.handle)

routes.get('/account', isAuthenticated, checkBalanceController.handle)

export { routes }
