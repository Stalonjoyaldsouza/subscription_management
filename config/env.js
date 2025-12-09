import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { 
    PORT = 5500,
    NODE_ENV = 'development',
    DB_URI,
    JWT_SECRET,JWT_EXPIRES_IN,
    ARCJET_ENV,ARCJET_KEY,
    
} = process.env;            

