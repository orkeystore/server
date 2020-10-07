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

import { IPaged } from 'src/types';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { Repo } from 'src/orm/entities/Repo';

import { ReposService } from './repos.service';
import { DTOReposBanchRequest } from './dto/DTOReposBanchRequest';
import { DTOReposCreateRequest } from './dto/DTOReposCreateRequest';
import { DTOReposRemoveRequest } from './dto/DTOReposRemoveRequest';
import { DTOReposBanchResponse } from './dto/DTOReposBanchResponse';
import { DTOQueryReposList } from './dto/DTOQueryReposList';

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
    return await this.reposService.getRepoBunch(code, body.accessToken);
  }

  @Post('/create')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async create(
    @Req() req: Express.Request,
    @Body() body: DTOReposCreateRequest,
  ): Promise<Repo> {
    return await this.reposService.createRepo(body, req.user.id);
  }

  @Get('/list')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async list(
    @Req() req: Express.Request,
    @Query() query: DTOQueryReposList,
  ): Promise<IPaged<Repo>> {
    const { page, perPage, search } = query;

    return await this.reposService.getRepos(
      req.user.id,
      { page, perPage },
      search,
    );
  }

  @Delete('/remove')
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
  async remove(
    @Req() req: Express.Request,
    @Body() body: DTOReposRemoveRequest,
  ): Promise<number[]> {
    return this.reposService.removeRepos(body.ids, req.user.id);
  }
}
