import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SelectedGenre } from '../../types/state';

const initialState: SelectedGenre = {
  selectedGenre: 'All genres',
};

export const selectedGenreData = createSlice({
  name: NameSpace.SelectedGenre,
  initialState,
  reducers: {
    updateSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const {updateSelectedGenre} = selectedGenreData.actions;
