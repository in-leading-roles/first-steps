import { Team } from "src/server/models/teams.model"

export type GetUserTeamsResponse = Promise<Team[]>