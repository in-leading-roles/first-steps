import { SetMetadata } from '@nestjs/common';

export const USER_KEY = 'userId';
export const Users = (userId:string) => SetMetadata(USER_KEY, userId);