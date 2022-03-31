import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../const';
import { userProcess } from './user-process/user-process';
import { selectedGenre } from './selected-genre/selected-genre';
import { filmsData } from './films-data/films-data';
import { commentsData } from './commentc-data/commentc-data';
import { promoFilmData } from './promo-film-data/promo-film-data';
import { similarFilmsData } from './similar-films-data/similar-films-data';
import { postCommentData } from './post-comment-data/post-comment-data';
import { storeErrorData } from './store-error-data/store-error-data';
import { getUserData } from './user-data/user-data';
import { reviewSendStatusData } from './review-send-status/review-send-status';
import { favoriteFilmsData } from './favorite-films-data/favorite-films-data';
import { serverStatusData } from './server-status/server-status';

export const rootReducer = combineReducers({
  [Namespace.user]: userProcess.reducer,
  [Namespace.selectedGenre]: selectedGenre.reducer,
  [Namespace.filmsData]: filmsData.reducer,
  [Namespace.commentsData]: commentsData.reducer,
  [Namespace.promoFilmData]: promoFilmData.reducer,
  [Namespace.similarFilmsData]: similarFilmsData.reducer,
  [Namespace.postUserReview]: postCommentData.reducer,
  [Namespace.setError]: storeErrorData.reducer,
  [Namespace.userData]: getUserData.reducer,
  [Namespace.reviewSendStatus]: reviewSendStatusData.reducer,
  [Namespace.favoriteFilms]: favoriteFilmsData.reducer,
  [Namespace.serverStatus]: serverStatusData.reducer,
});
