import mongoose, { Document, model, Model, Schema } from 'mongoose';
import { HouseInterFace } from '../interfaces/house';

const HouseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    homeType: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: { type: String, required: true },
    image: {
      type: String,
      default: '',
    },
    yearBuilt: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const House: Model<HouseInterFace> = model('House', HouseSchema);

export { House };
