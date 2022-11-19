import { Event } from "src/server/models/events.model"

export type GetUserEventsResponse = Promise<Event[]>