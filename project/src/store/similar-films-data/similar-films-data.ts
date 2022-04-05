import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SimilarFilmsData } from '../../types/state';

const initialState: SimilarFilmsData = {
  similarFilms: [],
  isDataLoaded: false,
};

export const similarFilmsData = createSlice({
  name: NameSpace.SimilarFilmsData,
  initialState,
  reducers: {
    setSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {setSimilarFilms} = similarFilmsData.actions;
