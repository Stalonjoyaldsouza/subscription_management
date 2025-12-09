import express from 'express';
import { PORT } from './config/env.js';
import arcjetmiddleware from './middleware/arcjet.middleware.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import connecttodatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';


const app = express();
import cors from 'cors';

app.use(cors({ origin: 'https://httpie.io' }));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(arcjetmiddleware);

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/sub',subscriptionRouter);

app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send('Welcome to the subcription.tracker');
});

app.listen(PORT,async() => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connecttodatabase();
});

export default app;   