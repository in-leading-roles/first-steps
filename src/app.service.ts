import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {

    users = ['asdfasdf', 'ASdadsfs']

    async getAll() {
        return this.users;
    }
}