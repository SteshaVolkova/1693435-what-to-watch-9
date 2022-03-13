import { createReducer } from '@reduxjs/toolkit';
import { updateSelectedGenre, loadFilms, loadComments, setError, requireAuthorization, setPromoFilm, setsimilarFilms, postUserReview, reviewSendError, userData } from './action';
import { AuthorizationStatus } from '../const';
import { Film, FilmReview, CommentPost } from '../types/films';
import { UserLoginData } from '../types/user-data';

type InitialStateProps = {
  selectedGenre: string,
  films: Film[],
  comments: FilmReview[],
  promoFilm: Film,
  similarFilms: Film[],
  userComment: CommentPost,
  userLoginData: UserLoginData,
  error: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  reviewSendError: boolean,
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
    id: 0,
    comment: '',
    rating: 0,
  },
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
  similarFilms: [],
  error: '',
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  reviewSendError: false,
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
    })
    .addCase(reviewSendError, (state, action) => {
      state.reviewSendError = action.payload;
    })
    .addCase(userData, (state, action) => {
      state.userLoginData = action.payload;
    });
});

export {reducer};
