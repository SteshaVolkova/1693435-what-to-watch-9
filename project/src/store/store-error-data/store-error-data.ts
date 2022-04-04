import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorData } from '../../types/state';

const initialState: ErrorData = {
  error: '',
};

export const storeErrorData = createSlice({
  name: NameSpace.SetError,
  initialState,
  reducers: {
    errorData: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {errorData} = storeErrorData.actions;
