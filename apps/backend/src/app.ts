import { errorResponse } from '@cynalitx/utils';
import cors from 'cors';
import express, { type Express } from 'express';
import morgan from 'morgan';

import { router } from './routes';

const app: Express = express();

const corsOrigin = process.env.CORS_ORIGIN;
app.use(cors(corsOrigin ? { origin: corsOrigin } : undefined));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', router);

app.use((req, res) => {
  const response = errorResponse(`Route ${req.method} ${req.path} not found`, 'not_found');
  res.status(404).json(response);
});

export { app };
