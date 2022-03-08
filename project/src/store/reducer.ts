import { createReducer } from '@reduxjs/toolkit';
import { updateSelectedGenre, loadFilms, setError, requireAuthorization } from './action';
import { AuthorizationStatus } from '../const';
import { Film } from '../types/films';

type InitialStateProps = {
  selectedGenre: string,
  films: Film[],
  error: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
};

const initialState: InitialStateProps = {
  selectedGenre: 'All genres',
  films: [],
  error: '',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
