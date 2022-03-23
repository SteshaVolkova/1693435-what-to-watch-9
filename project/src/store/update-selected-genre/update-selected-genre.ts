import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SelectedGenre } from '../../types/state';

const initialState: SelectedGenre = {
  selectedGenre: 'All genres',
};

export const selectedGenre = createSlice({
  name: NameSpace.selectedGenre,
  initialState,
  reducers: {
    updateSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const {updateSelectedGenre} = selectedGenre.actions;
