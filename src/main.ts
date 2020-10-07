import { bootstrap } from './app.module';
import dotenv from 'dotenv';
import path from 'path';

const envPath = process.env.ENV_FILE || '.env';
dotenv.config({ path: path.resolve(process.cwd(), envPath) });

if (process.env.PRIVATE_HOST) {
  bootstrap().then((app) => app.listen(3000));
}

if (process.env.PUBLIC_HOST) {
  bootstrap({ isPublic: true }).then((app) => app.listen(3100));
}
