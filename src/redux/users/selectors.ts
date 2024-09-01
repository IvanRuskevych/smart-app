import { RootState } from '../store';

export const usersSelector = (state: RootState) => state.users.users;
export const filtersSelector = (state: RootState) => state.filters;
