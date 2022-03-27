import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorData } from '../../types/state';

const initialState: ErrorData = {
  error: '',
};

export const setErrorData = createSlice({
  name: NameSpace.setError,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = setErrorData.actions;
