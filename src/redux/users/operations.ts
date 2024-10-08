import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '../../types';
import { AppDispatch } from '../store';
import { userService } from '../../services';

export const fetchUsers = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string; dispatch: AppDispatch }
>('users/fetchAllUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await userService.getUsers();
    return data;
  } catch (err) {
    return rejectWithValue('Failed to fetch users');
  }
});
