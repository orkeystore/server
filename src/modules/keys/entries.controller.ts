import { Response } from 'express';
import {
  UseGuards,
  Get,
  Param,
  Post,
  Req,
  Body,
  Delete,
  Res,
  ParseIntPipe,
  Query,
  HttpCode,
  HttpStatus,
  ParseArrayPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { KeysService } from './services/keys.service';
import { DTOCreateKey } from './dto/DTOCreateKey';
import { EntriesService } from './services/entries.service';
import { PublicEntriesController } from './public.controller';
import { JwtOpionalGuard } from '../auth/guards/jwt-optional.guard';
import { DTOEntryDetails } from './dto/DTOEntryDetails';
import { DTOQueryEntriesList } from './dto/DTOQueryEntriesList';
import { DTOEntriesList } from './dto/DTOEntriesList';
import { DTOEntriesByIds } from './dto/DTOEntriesByIds';

export class EntriesController extends PublicEntriesController {
  constructor(keysService: KeysService, entriesService: EntriesService) {
    super(keysService, entriesService);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  async createKeyEntry(
    @Req() req: Express.Request,
    @Body() body: DTOCreateKey,
  ): Promise<DTOEntryDetails> {
    const result = await this.entriesService.createEntryWithKeys({
      name: body.name,
      code: body.code,
      accessToken: body.accessToken,
      description: body.description,
      accountId: req.user.id,
      rotationPeriod: body.rotation,
    });

    return plainToClass(DTOEntryDetails, result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  async deleteKeyEntry(
    @Req() req: Express.Request,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DTOEntryDetails> {
    const result = await this.entriesService.deleteEntryById(id, req.user);
    return plainToClass(DTOEntryDetails, result);
  }

  @Post('archive/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBearerAuth('Authorization')
  async archiveKeyEntry(
    @Req() req: Express.Request,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DTOEntryDetails> {
    const result = await this.entriesService.archiveEntryById(id, req.user);
    return plainToClass(DTOEntryDetails, result);
  }

  @Post('restore/:id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBearerAuth('Authorization')
  async restoreKeyEntry(
    @Req() req: Express.Request,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DTOEntryDetails> {
    const result = await this.entriesService.restoreEntryById(id, req.user);
    return plainToClass(DTOEntryDetails, result);
  }

  @Get('list')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async getEntries(
    @Req() req: Express.Request,
    @Query() query: DTOQueryEntriesList,
  ): Promise<DTOEntriesList> {
    const result = await this.entriesService.getEntriesList(
      req.user.id,
      {
        page: query.page,
        perPage: query.perPage,
      },
      query.search,
      query.archived === 1,
    );

    return plainToClass(DTOEntriesList, result);
  }

  @Get('byIds')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  @ApiQuery({ name: 'ids', isArray: true, required: true, type: Number })
  async getEntriesByIds(
    @Req() req: Express.Request,
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ): Promise<DTOEntriesByIds> {
    const items = await this.entriesService.getEntriesByIds(req.user.id, ids);
    return plainToClass(DTOEntriesByIds, { items });
  }

  @Post('private/jwk/:keyId')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtOpionalGuard)
  async getJwkPrivateEntry(
    @Req() req: Express.Request,
    @Param('keyId') keyId: string,
    @Body('accessToken') accessCode: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.resolveEntryKey(
      'private',
      'jwk',
      keyId,
      res,
      req.user,
      accessCode,
    );
  }

  @Post('private/jwks/:keyId')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtOpionalGuard)
  async getJwksPrivateEntry(
    @Req() req: Express.Request,
    @Param('keyId') keyId: string,
    @Body('accessToken') accessCode: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.resolveEntryKey(
      'private',
      'jwks',
      keyId,
      res,
      req.user,
      accessCode,
    );
  }

  @Post('private/pem/:keyId')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtOpionalGuard)
  async getPemPrivateEntry(
    @Req() req: Express.Request,
    @Param('keyId') keyId: string,
    @Body('accessToken') accessCode: string,
    @Res() res: Response,
  ): Promise<void> {
    await this.resolveEntryKey(
      'private',
      'pem',
      keyId,
      res,
      req.user,
      accessCode,
    );
  }
}
