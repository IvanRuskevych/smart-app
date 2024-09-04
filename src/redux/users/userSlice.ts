import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      // TODO
      .addCase(
        fetchUsers.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? 'Unknown error occurred';
        }
      );
  },
});

export const userReducer = userSlice.reducer;
