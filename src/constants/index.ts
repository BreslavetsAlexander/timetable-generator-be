import 'dotenv/config';

export const ENV_VARIABLES = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL || '',
};

export const STATIC_FOLDER = 'static';

export const TEMPLATES_FOLDER = 'templates';
