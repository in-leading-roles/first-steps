import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { USER_KEY } from './users.decorator';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private reflector: Reflector,
          private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const userId = this.reflector.getAllAndOverride<string>(USER_KEY, [context.getHandler(), context.getClass()])

    if(!userId){
      return true
    }
    
    const request = context.switchToHttp().getRequest()
    const authHeader = request.headers.authorization
    const token = authHeader.split(" ")[1]
    if(!token){
      throw new UnauthorizedException();
    }

    

    const user = this.jwtService.verify(token)
    request.user = user;
    return user.id == userId;
  }
}