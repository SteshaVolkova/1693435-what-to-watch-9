import { createReducer } from '@reduxjs/toolkit';
import { updateSelectedGenre, loadFilms, loadComments, setError, requireAuthorization, setPromoFilm, setsimilarFilms, postUserReview } from './action';
import { AuthorizationStatus } from '../const';
import { Film, FilmReview, CommentPost } from '../types/films';

type InitialStateProps = {
  selectedGenre: string,
  films: Film[],
  comments: FilmReview[],
  promoFilm: Film,
  similarFilms: Film[],
  userComment: CommentPost,
  error: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
};

const initialState: InitialStateProps = {
  selectedGenre: 'All genres',
  films: [],
  comments: [],
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  userComment: {
    review: '',
    rating: 0,
  },
  similarFilms: [],
  error: '',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setsimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(postUserReview, (state, action) => {
      state.userComment = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
