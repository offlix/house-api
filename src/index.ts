import dotenv from 'dotenv';
import { DatabaseConnect } from './config/database-connect';
import { errorHandler } from '@offlix-org/common';
import { app } from './app';
dotenv.config();
const PORT = process.env.PORT || 3000;

const start = () => {
  if (!process.env.MONGO_URI) {
    throw new Error('DATABASE uri must be defined!');
  }
  DatabaseConnect(process.env.MONGO_URI);
};

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.use(errorHandler);
start();
