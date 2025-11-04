import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT = 5500, NODE_ENV = 'development' } = process.env;
