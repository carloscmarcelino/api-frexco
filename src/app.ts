import express from 'express';
import cors from 'cors';
import Routes from './routes/Routes';

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.use('/', Routes);

export { app };
