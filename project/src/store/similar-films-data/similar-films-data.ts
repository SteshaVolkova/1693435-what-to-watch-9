import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { SimilarFilmsData } from '../../types/state';

const initialState: SimilarFilmsData = {
  similarFilms: [],
  isDataLoaded: false,
};

export const similarFilmsData = createSlice({
  name: Namespace.similarFilmsData,
  initialState,
  reducers: {
    setSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {setSimilarFilms} = similarFilmsData.actions;
