import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DTOCreateKey {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  accessToken: string;

  @ApiProperty()
  description?: string;

  @ApiProperty({
    description:
      'Key rotation period (examples: 5 seconds, 10 minutes, 2 days, 4 weeks, 6 months, 1 year)',
  })
  rotation?: string;
}
