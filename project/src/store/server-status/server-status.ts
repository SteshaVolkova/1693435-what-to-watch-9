import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ServerStatusData } from '../../types/state';

const initialState: ServerStatusData = {
  status: true,
};

export const serverStatusData = createSlice({
  name: Namespace.serverStatus,
  initialState,
  reducers: {
    serverStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {serverStatus} = serverStatusData.actions;
