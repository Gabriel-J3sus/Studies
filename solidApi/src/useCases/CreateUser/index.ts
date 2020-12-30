import { MailtrapMailProvider } from "../../providers/implementetions/MailtrapMailProvider";
import { PostgresUsersRepository } from '../../repositories/implementetions/PostgresUsersRepository'
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }