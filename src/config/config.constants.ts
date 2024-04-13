import { AppConfig } from './config.type';

export default () =>
  ({
    auth: {
      salt: parseInt(process.env.HASH_SALT),
      secret: process.env.JWT_SECRET,
    },
    database: {
      host: process.env.DATABASE_HOST,
    },
  }) as AppConfig;
