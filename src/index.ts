import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import { router } from './router';

const app: Express = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || '';

app.use(express.json());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on port = ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
