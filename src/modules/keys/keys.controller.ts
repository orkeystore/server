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
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { DTOAllKeysFormats } from './dto/DTOAllKeysFromats';
import { DTOQueryKeysStorage } from './dto/DTOQueryKeysStorage';
import { DTOStorageItems } from './dto/DTOStorageItems';
import { EntriesService } from './services/entries.service';
import { KeysService } from './services/keys.service';

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
  ): Promise<DTOAllKeysFormats> {
    const entry = await this.entriesService.getEntryWithUserAccessCheck(
      entryId,
      req.user,
    );

    const [key] = await this.keysService.getActiveKeysSetByEntry(entry);
    const result = await this.keysService.getAllFormats(key, true);
    return plainToClass(DTOAllKeysFormats, result);
  }

  @Get('storage')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async getRSAKeysList(
    @Req() req: Express.Request,
    @Query() query: DTOQueryKeysStorage,
  ): Promise<DTOStorageItems> {
    const { page, perPage, search } = query;

    const result = await this.keysService.getKeysList(
      { page, perPage },
      { entryName: search, accountId: req.user.id },
    );

    return plainToClass(DTOStorageItems, result);
  }

  @Get(':keyId')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async getKey(
    @Req() req: Express.Request,
    @Param('keyId', ParseIntPipe) keyId: number,
  ): Promise<DTOAllKeysFormats> {
    const key = await this.keysService.getKeyById(keyId, {
      userIdForCheck: req.user.id,
    });
    const result = await this.keysService.getAllFormats(key, true);

    return plainToClass(DTOAllKeysFormats, result);
  }
}
