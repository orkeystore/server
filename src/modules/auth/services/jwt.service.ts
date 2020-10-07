/* eslint-disable @typescript-eslint/ban-types */
import * as jwt from 'jsonwebtoken';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import moment from 'moment';

@Injectable()
export class JwtService {
  private options: {
    signOptions: jwt.SignOptions;
    verifyOptions: jwt.VerifyOptions;
  };

  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {
    this.options = {
      signOptions: {
        algorithm: 'RS256',
      },
      verifyOptions: {
        algorithms: ['RS256'],
      },
    };
  }

  async sign(
    payload: string | Buffer | object,
    options?: jwt.SignOptions,
  ): Promise<string> {
    const { key, expires } = await this.authService.getSystemKey();
    const keyExpiresIn = expires - moment().unix() - 1;

    return jwt.sign(payload, key.toPEM(true), {
      ...this.options.signOptions,
      ...options,
      expiresIn: Math.min(60 * 60 * 2, keyExpiresIn),
    });
  }
}
