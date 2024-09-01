import { createSlice } from '@reduxjs/toolkit';

import { IUserState } from '../../types';
import { fetchUsers } from './operations';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loading = false;
        // @ts-ignore
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
