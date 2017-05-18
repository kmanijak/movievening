import { userNameSpace } from './constants';

const getUserState = state => state[userNameSpace];

export const getUserDetails = state => getUserState(state).details;
export const isPending = state => getUserState(state).pending;
export const getError = state => getUserState(state).error;
