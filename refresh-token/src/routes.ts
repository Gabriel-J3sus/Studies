import { Router } from 'express'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { AuthenticateUserController } from './useCases/authenticateUser/authenticateUserController'
import { CreateUserController } from './useCases/createUser/CreateUserController'
import { RefreshTokenUserController } from './useCases/refreshTokenUser/refreshTokenUserController'

const router = Router()

const createuserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()

router.post("/users", createuserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/refresh-token", refreshTokenUserController.handle)

router.get("/courses", ensureAuthenticated, (request, response) => {
  return response.json([
    { id: 1, name: "NodeJS" }
  ])
})




export { router }