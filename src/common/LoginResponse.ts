import { Event } from "src/server/models/events.model"
import { Role } from "src/server/models/roles.model";
import { User } from "src/server/models/users.model"

export type LoginResponse = Promise<{
    roles: Role[];
    token: string;
}>