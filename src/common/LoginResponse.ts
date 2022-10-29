import { Event } from "src/server/events/events.model"
import { User } from "src/server/users/users.model"

export type LoginResponse = Promise<{
    token: string;
}>