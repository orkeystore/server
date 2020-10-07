import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthAdminGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isSuper = await super.canActivate(context);
    const req: Express.Request = context.switchToHttp().getRequest();

    if (!req.user.isAdmin) {
      throw new HttpException('Admin account required', HttpStatus.FORBIDDEN);
    }

    return isSuper && req.user.isAdmin;
  }
}
