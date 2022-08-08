import express, { json } from 'express';
import cors from 'cors';
import { houseRoute } from './routes/house-route';
import { NotFoundError } from '@offlix-org/common';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import morganMiddleWare from './middleware/logger-middleware';
import { healthRouter } from './routes/health-route';
const app = express();

app.use(cors());
app.use(json());
app.use(morganMiddleWare);

//router config
app.use('/api', healthRouter);
app.use('/api/houses', houseRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.all('*', (res, req, next) => {
  throw new NotFoundError();
});

export { app };
