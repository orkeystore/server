import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DTOHttpException {
  @IsNumber()
  statusCode: number;

  @IsString()
  message: string;

  @IsString()
  @IsOptional()
  error?: any;

  @IsOptional()
  errors?: any;
}
