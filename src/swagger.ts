import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * @ignore
 */
export async function initSwagger(app: INestApplication): Promise<void> {
  const options = new DocumentBuilder()
    .setTitle('Orkeystore')
    .setDescription('The REST API for key orchestration')
    .setVersion('0.1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'Authorization',
    )
    .addTag('Auth', 'Group of endpoints related with authorization process.')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
