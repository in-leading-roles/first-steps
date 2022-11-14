import { SetMetadata } from '@nestjs/common';

export const USER_KEY = 'UserGuard';
export const Users = () => SetMetadata(USER_KEY, true);