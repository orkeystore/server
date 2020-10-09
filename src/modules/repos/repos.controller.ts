import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Delete,
  Query,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';

import { ReposService } from './repos.service';
import { DTOReposBanchRequest } from './dto/DTOReposBanchRequest';
import { DTOReposCreateRequest } from './dto/DTOReposCreateRequest';
import { DTOReposRemoveRequest } from './dto/DTOReposRemoveRequest';
import { DTOReposBanchResponse } from './dto/DTOReposBanchResponse';
import { DTOQueryReposList } from './dto/DTOQueryReposList';
import { DTORepoDetails } from './dto/DTORepoDetails';
import { plainToClass } from 'class-transformer';
import { DTOReposList } from './dto/DTOReposList';
import { DTODeletedRepos } from './dto/DTODeletedRepos';

@ApiTags('Repos')
@Controller('repo')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Post('/bunch/:code')
  @HttpCode(HttpStatus.ACCEPTED)
  async banch(
    @Param('code') code: string,
    @Body() body: DTOReposBanchRequest,
  ): Promise<DTOReposBanchResponse> {
    const result = await this.reposService.getRepoBunch(code, body.accessToken);
    return plainToClass(DTOReposBanchResponse, result);
  }

  @Post('/create')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async create(
    @Req() req: Express.Request,
    @Body() body: DTOReposCreateRequest,
  ): Promise<DTORepoDetails> {
    const result = await this.reposService.createRepo(body, req.user.id);
    return plainToClass(DTORepoDetails, result);
  }

  @Get('/list')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async list(
    @Req() req: Express.Request,
    @Query() query: DTOQueryReposList,
  ): Promise<DTOReposList> {
    const { page, perPage, search } = query;

    const result = await this.reposService.getRepos(
      req.user.id,
      { page, perPage },
      search,
    );

    return plainToClass(DTOReposList, result);
  }

  @Delete('/remove')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async remove(
    @Req() req: Express.Request,
    @Body() body: DTOReposRemoveRequest,
  ): Promise<DTODeletedRepos> {
    const ids = await this.reposService.removeRepos(body.ids, req.user.id);

    return plainToClass(DTODeletedRepos, { ids });
  }
}
