import { createSelector } from 'reselect';

export const select = state => state.loginReducer;
export const makeSelectError = () => createSelector(select, state => state.isError);
export const makeSelectLoading = () => createSelector(select, state => state.isLoading);
