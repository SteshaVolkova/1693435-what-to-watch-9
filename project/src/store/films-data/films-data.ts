import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { FilmsData } from '../../types/state';

const initialState: FilmsData = {
  films: [],
  isDataLoaded: false,
};

export const filmsData = createSlice({
  name: Namespace.filmsData,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {loadFilms} = filmsData.actions;
