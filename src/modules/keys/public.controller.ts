import { Controller, Get, Param, Res } from '@nestjs/common';
import { JWK } from 'jose';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { Entry } from 'src/orm/entities/Entry';
import { EntriesService } from './services/entries.service';
import { KeysService } from './services/keys.service';

@ApiTags('Entries')
@Controller('entry')
export class PublicEntriesController {
  constructor(
    readonly keysService: KeysService,
    readonly entriesService: EntriesService,
  ) {}

  @Get('public/jwk/:keyId')
  async getJwkPublicEntry(
    @Param('keyId') keyId: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.resolveEntryKey('public', 'jwk', keyId, res);
  }

  @Get('public/pem/:keyId')
  async getPemPublicEntry(
    @Param('keyId') keyId: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.resolveEntryKey('public', 'pem', keyId, res);
  }

  @Get('public/jwks/:keyId')
  async getJwksPublicEntry(
    @Param('keyId') keyId: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.resolveEntryKey('public', 'jwks', keyId, res);
  }

  async resolveEntryKey(
    type: 'private' | 'public',
    format: 'jwk' | 'jwks' | 'pem',
    keyId: string,
    res: Response,
    user?: Express.User,
    accessCode?: string,
  ): Promise<void> {
    const { key, expires } = await this.getEntryKey(
      type,
      keyId,
      user,
      accessCode,
    );
    await this.sendEntryKey(type, format, key, expires, res);
  }

  async sendEntryKey(
    type: 'private' | 'public',
    format: 'jwk' | 'jwks' | 'pem',
    key: JWK.RSAKey,
    expires: string,
    res: Response,
  ): Promise<void> {
    if (expires) {
      res.setHeader('Expires', expires);
    }

    switch (format) {
      case 'jwk':
        res.send(key.toJWK(type === 'private'));
        break;
      case 'jwks':
        res.send({ keys: [key.toJWK(type === 'private')] });
        break;
      default:
        res.send(key.toPEM(type === 'private'));
        break;
    }
  }

  async getEntryKey(
    type: 'private' | 'public',
    keyIdOrCode: string,
    user?: Express.User,
    accessCode?: string,
  ): Promise<{ expires: string; key: JWK.RSAKey }> {
    const parsedKey = parseInt(keyIdOrCode) || keyIdOrCode;
    let entry: Entry;

    if (type === 'public') {
      entry = await this.entriesService.getEntry(parsedKey);
    } else if (accessCode !== undefined) {
      entry = await this.entriesService.getEntryWithCodeAccessCheck(
        parsedKey,
        accessCode,
      );
    } else {
      entry = await this.entriesService.getEntryWithUserAccessCheck(
        parsedKey,
        user,
      );
    }

    return await this.keysService.getCurrentActiveKeyForEntry(entry);
  }
}
