import express from 'express';
import cors from 'cors';

import FruitsRoutes from './routes/FruitsRoutes';

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.use('/fruits', FruitsRoutes);

export { app };
