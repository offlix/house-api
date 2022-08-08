import { validateRequest } from '@offlix-org/common';
// import { addHouse } from '../controller/house-controller';
// import validate from '../validation/validation';

import express from 'express';
import { checkHealth } from '../controller/health-controller';
const router = express.Router();
router.get('/health', checkHealth);
export { router as healthRouter };
