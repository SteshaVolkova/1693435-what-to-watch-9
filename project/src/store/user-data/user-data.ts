import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
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
  name: NameSpace.userData,
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const {userData} = getUserData.actions;
