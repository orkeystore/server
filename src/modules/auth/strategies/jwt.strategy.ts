import { Secret } from 'jsonwebtoken';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      secretOrKeyProvider: (
        _req: Express.Request,
        _rawJwtToken: string,
        done: (err: any, key: Secret) => void,
      ) => {
        this.authService.getSystemKey().then(({ key }) => {
          done(null, key.toPEM());
        });
      },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      jsonWebTokenOptions: {
        algorithm: 'RS256',
      },
    });
  }

  async validate(payload: { account: number }): Promise<Express.User> {
    return await this.authService.getAccountById(payload.account);
  }
}
