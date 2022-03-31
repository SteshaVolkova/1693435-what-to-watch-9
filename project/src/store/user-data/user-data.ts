import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { UserData } from '../../types/state';

const initialState: UserData = {
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const getUserData = createSlice({
  name: Namespace.userData,
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const {userData} = getUserData.actions;
