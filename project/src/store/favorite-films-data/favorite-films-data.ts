import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteFilmsData } from '../../types/state';

const initialState: FavoriteFilmsData = {
  favoriteFilms: [],
};

export const favoriteFilmsData = createSlice({
  name: NameSpace.favoriteFilms,
  initialState,
  reducers: {
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
  },
});

export const {loadFavoriteFilms} = favoriteFilmsData.actions;
