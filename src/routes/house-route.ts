import { validateRequest } from '@offlix-org/common';
// import { addHouse } from '../controller/house-controller';
// import validate from '../validation/validation';

import express from 'express';
import {
  addHouse,
  deleteHouseById,
  getHouseById,
  getHouses,
  updateHouseById,
} from '../controller/house-controller';
import { isValidId } from '../middleware/valid-object-id';
import { validate } from '../validation/validation';
const router = express.Router();

router.post('/add', validate, validateRequest, addHouse);
router.get('/', getHouses);
router.get('/:id', isValidId, getHouseById);
router.put('/:id', isValidId, updateHouseById);
router.delete('/:id', isValidId, deleteHouseById);
// router.route('/add', validate, validateRequest, addHouse);

export { router as houseRoute };
