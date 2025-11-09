import express from 'express';
import { PORT } from './config/env.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
<<<<<<< HEAD
=======
import connecttodatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
>>>>>>> 14d4554 (model,middleware,routes and database is added)

const app = express();

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/sub',subscriptionRouter);
<<<<<<< HEAD
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
=======
app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send('Welcome to the subcription.tracker');
});

app.listen(PORT,async() => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connecttodatabase();
});

export default app;
  
>>>>>>> 14d4554 (model,middleware,routes and database is added)
