import {
  Controller,
  UseGuards,
  Get,
  Param,
  Req,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { IPaged } from 'src/types';
import { DTOQueryKeysStorage } from './dto/DTOQueryKeysStorage';
import { EntriesService } from './services/entries.service';

import {
  KeysService,
  IParsedKey,
  IAllKeyFormats,
} from './services/keys.service';

@ApiTags('Keys')
@Controller('key')
export class KeysController {
  constructor(
    private readonly keysService: KeysService,
    private readonly entriesService: EntriesService,
  ) {}

  @Get('byEntry/:entryId')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async getKeybyEntry(
    @Req() req: Express.Request,
    @Param('entryId', ParseIntPipe) entryId: number,
  ): Promise<IAllKeyFormats> {
    const entry = await this.entriesService.getEntryWithUserAccessCheck(
      entryId,
      req.user,
    );

    const [key] = await this.keysService.getActiveKeysSetByEntry(entry);

    return this.keysService.getAllFormats(key, true);
  }

  @Get('storage')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async getRSAKeysList(
    @Req() req: Express.Request,
    @Query() query: DTOQueryKeysStorage,
  ): Promise<IPaged<IParsedKey>> {
    const { page, perPage, search } = query;
    return await this.keysService.getKeysList(
      { page, perPage },
      { entryName: search, accountId: req.user.id },
    );
  }

  @Get(':keyId')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async getKey(
    @Req() req: Express.Request,
    @Param('keyId', ParseIntPipe) keyId: number,
  ): Promise<IAllKeyFormats> {
    const key = await this.keysService.getKeyById(keyId, {
      userIdForCheck: req.user.id,
    });
    return this.keysService.getAllFormats(key, true);
  }
}
