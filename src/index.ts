import express, { Express } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { connect } from 'mongoose';
import { router } from './router';
import { ENV_VARIABLES, STATIC_FOLDER } from './constants';

const app: Express = express();
const { DB_URL, PORT } = ENV_VARIABLES;

app.disable('etag');
app.use(express.json());
app.use(express.static(path.resolve(__dirname, STATIC_FOLDER)));
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await connect(DB_URL);

    if (!fs.existsSync(STATIC_FOLDER)) {
      fs.mkdirSync(STATIC_FOLDER);
    }

    app.listen(PORT, () => {
      console.log(`Server started on port = ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
