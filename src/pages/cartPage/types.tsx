import { SingleBike } from '../types';

export interface Cart {
  totalPrice?: number;
  bikes: SingleBike[];
}