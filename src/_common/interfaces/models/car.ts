import { Model } from './_common'

export interface Car extends Model {
  model: string,
  make: string,
  year: number,
  image: string,
  vin: string,
  interior_color: string,
  exterior_color: string,
  price: string
}