import express, { json } from 'express';
import cors from 'cors';
import { houseRoute } from './routes/house-route';
import { NotFoundError } from '@offlix-org/common';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
const app = express();

app.use(cors());
app.use(json());

//router config
app.use('/api/houses', houseRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.all('*', (res, req, next) => {
  throw new NotFoundError();
});

export { app };
