import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ErrorData } from '../../types/state';

const initialState: ErrorData = {
  error: '',
};

export const storeErrorData = createSlice({
  name: Namespace.setError,
  initialState,
  reducers: {
    errorData: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {errorData} = storeErrorData.actions;
