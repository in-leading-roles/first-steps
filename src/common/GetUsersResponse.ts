import { User } from "src/server/models/users.model"

export type GetUsersResponse = Promise<User[]>