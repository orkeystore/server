import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * @ignore
 */
export async function initSwagger(app: INestApplication): Promise<void> {
  const options = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The REST API for jwk rotator')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'Authorization',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
