import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server started on port = ${port}`);
});
