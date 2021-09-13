import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../http/swagger.json';

import database from '../database';
import cron from '../cron';

import routes from './routes';

const app = express();

database();
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === 'production' ? undefined : false,
  })
);
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
cron();

export default app;
