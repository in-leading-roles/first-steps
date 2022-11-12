import { Event } from "src/server/events/events.model"
import { Role } from "src/server/roles/roles.model";
import { User } from "src/server/users/users.model"

export type LoginResponse = Promise<{
    roles: Role[];
    token: string;
}>