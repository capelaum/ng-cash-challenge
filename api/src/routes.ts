import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { Router } from 'express'

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

routes.post('/api/users', createUserController.handle)

routes.post('/api/login', authenticateUserController.handle)

export { routes }
