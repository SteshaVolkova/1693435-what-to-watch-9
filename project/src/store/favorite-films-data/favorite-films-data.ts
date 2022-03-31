import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { FavoriteFilmsData } from '../../types/state';

const initialState: FavoriteFilmsData = {
  favoriteFilms: [],
};

export const favoriteFilmsData = createSlice({
  name: Namespace.favoriteFilms,
  initialState,
  reducers: {
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
  },
});

export const {loadFavoriteFilms} = favoriteFilmsData.actions;
