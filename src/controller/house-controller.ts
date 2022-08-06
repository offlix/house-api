import { BadRequestError, NotFoundError } from '@offlix-org/common';
import { NextFunction, Request, Response } from 'express';
import mongoose, { isValidObjectId } from 'mongoose';
import { HouseInterFace } from '../interfaces/house';
import { House } from '../models/House';
export const addHouse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const house = new House({
    title: req.body.title,
    address: req.body.address,
    homeType: req.body.homeType,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    yearBuilt: req.body.yearBuilt,
  });

  house
    .save()
    .then((result) => {
      res.send({
        message: 'House data created successfully',
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      next(new BadRequestError('Something went wrong'));
    });
};

export const getHouses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await House.find()
    .sort({ _id: -1 })
    .then((houses) => {
      if (!houses) {
        next(new BadRequestError('Products are empty!'));
      } else {
        res.status(200).send(houses);
      }
    })
    .catch((err) => {
      console.log(err);
      return next(new Error('Something went Wrong!'));
    });
};

export const getHouseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const houseId: any = req.params.id;

  await House.findById({ _id: houseId })
    .then((house) => {
      res.status(200).send(house);
    })
    .catch((err) => {
      console.log(err);
      next(new Error('something went wrong!'));
    });
};

export const updateHouseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const houseId: any = req.params.id;
  const houseBody: HouseInterFace = req.body;

  await House.findById({ _id: houseId })
    .then(async (house) => {
      if (!house) {
        next(new BadRequestError('house not found!'));
      }
      await house?.set(houseBody);
      await house?.save();

      res.send({
        message: 'updated successfully!',
        house,
      });
    })
    .catch((err) => {
      console.log(err);
      next(new Error('Something went wrong!'));
    });
};

export const deleteHouseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const houseId = req.params.id;
  let houseName = '';
  await House.findById({ _id: houseId }).then(async (house) => {
    if (!house) {
      next(new BadRequestError('house not found!'));
    } else {
      await House.deleteOne({ _id: house.id })
        .then(() => {
          houseName = house.title;
          res.send({
            message: `${houseName} has been deleted successfully!`,
          });
        })
        .catch((err) => {
          next(new BadRequestError('Something went wrong! when delete'));
        });
    }
  });
};
