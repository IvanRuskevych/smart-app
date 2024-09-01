import { PayloadAction } from '@reduxjs/toolkit';

// User type
type GeoType = { lat: string; lng: string };

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type CompanyType = { name: string; catchPhrase: string; bs: string };

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: AddressType;
  phone?: string;
  website?: string;
  company?: CompanyType;
}

// userSlice types
export interface IUserState {
  users: IUser[];
  loading: boolean;
  error: string;
}

// filtersSlice types
export type FiltersType = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type SetFilterActionType = PayloadAction<{
  field: keyof FiltersType;
  value: string;
}>;
