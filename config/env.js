import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

<<<<<<< HEAD
export const { PORT = 5500, NODE_ENV = 'development' } = process.env;
=======
export const { PORT = 5500, NODE_ENV = 'development',DB_URI } = process.env;
>>>>>>> 14d4554 (model,middleware,routes and database is added)
