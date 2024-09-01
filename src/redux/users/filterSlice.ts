import { createSlice } from '@reduxjs/toolkit';

import { FiltersType, SetFilterActionType } from '../../types';

const initialState: FiltersType = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: SetFilterActionType) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
