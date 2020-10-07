import {
  Controller,
  UseGuards,
  Post,
  Body,
  Req,
  Get,
  HttpStatus,
  HttpCode,
  Delete,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { IEnvConfig } from 'src/modules/config/env.config';

import { AuthService } from './services/auth.service';
import { LoginGuard } from './guards/login.guard';
import { DTOAuthUser } from './dto/DTOAuthUser';
import { JwtAuthGuard } from './guards/jwt.guard';
import { DTOCreateAccountParams } from './dto/DTOCreateAccountParams';
import { JwtAuthAdminGuard } from './guards/jwt-admin.guard';
import { DTODeleteAccount } from './dto/DTODeleteAccount';
import { DTOSessionInfo } from './dto/DTOSessionInfo';
import { plainToClass } from 'class-transformer';
import { DTOAccountDetails } from './dto/DTOAccountDetails';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async getUserData(req: Express.Request): Promise<DTOSessionInfo> {
    const { id, login, isAdmin } = req.user;
    const { token } = await this.authService.login(req.user);

    return {
      account: { id, login, isAdmin },
      token,
      hosts: this.configService.get<IEnvConfig['hosts']>('hosts'),
    };
  }

  @UseGuards(LoginGuard)
  @Post('/token')
  @HttpCode(HttpStatus.ACCEPTED)
  async token(
    @Body() _body: DTOAuthUser,
    @Req() req: Express.Request,
  ): Promise<DTOSessionInfo> {
    return await this.getUserData(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  @ApiBearerAuth('Authorization')
  async userData(@Req() req: Express.Request): Promise<DTOSessionInfo> {
    return await this.getUserData(req);
  }

  @UseGuards(JwtAuthAdminGuard)
  @Post('/account')
  @ApiBearerAuth('Authorization')
  async createAccount(
    @Body() body: DTOCreateAccountParams,
  ): Promise<DTOAccountDetails> {
    const result = await this.authService.createAccount(body);

    return plainToClass(DTOAccountDetails, result);
  }

  @UseGuards(JwtAuthAdminGuard)
  @Delete('/accounts')
  @ApiBearerAuth('Authorization')
  async deleteAccount(@Body() body: DTODeleteAccount): Promise<number[]> {
    return await this.authService.removeAccounts(body.ids);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/me')
  @ApiBearerAuth('Authorization')
  async deleteMe(@Req() req: Express.Request): Promise<number[]> {
    return await this.authService.removeAccounts([req.user.id]);
  }

  @UseGuards(JwtAuthAdminGuard)
  @Get('/accounts')
  @ApiBearerAuth('Authorization')
  async accounts(): Promise<DTOAccountDetails[]> {
    const result = await this.authService.getAccounts();
    return plainToClass(DTOAccountDetails, result);
  }
}
