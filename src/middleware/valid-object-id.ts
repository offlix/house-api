import { BadRequestError } from '@offlix-org/common';
import e, { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req: Request, res: Response, next: NextFunction) => {
  if (!isValidObjectId(req.params.id)) {
    throw new BadRequestError('Id is Invalid!');
  }
  next();
};
