import { BadRequestError } from '@offlix-org/common';
import { Request, Response } from 'express';
import Logger from '../utils/logger';

export const checkHealth = (req: Request, res: Response) => {
  try {
    res.status(200).send({
      message: 'ok',
    });
  } catch (e) {
    Logger.error(e);
    throw new BadRequestError('Something went wrong!');
  }
};
