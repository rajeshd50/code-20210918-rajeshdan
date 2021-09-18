import { Model } from './_common'

export interface Role extends Model {
  name: string;
}

export interface User extends Model {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}