import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController'
import { Router } from 'express'

const routes = Router()

const createUserController = new CreateUserController()

routes.post('/api/users', createUserController.handle)

export { routes }
