import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { selectedGenre } from './update-selected-genre/update-selected-genre';
import { filmsData } from './films-data/films-data';
import { commentsData } from './commentc-data/commentc-data';
import { promoFilmData } from './promo-film-data/promo-film-data';
import { similarFilmsData } from './similar-films-data/similar-films-data';
import { postCommentData } from './post-comment-data/post-comment-data';
import { setErrorData } from './set-data-error/set-data-error';
import { getUserData } from './user-data/user-data';
import { reviewSendStatusData } from './review-send-status/review-send-status';
import { favoriteFilmsData } from './favorite-films-data/favorite-films-data';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.selectedGenre]: selectedGenre.reducer,
  [NameSpace.filmsData]: filmsData.reducer,
  [NameSpace.commentsData]: commentsData.reducer,
  [NameSpace.promoFilmData]: promoFilmData.reducer,
  [NameSpace.similarFilmsData]: similarFilmsData.reducer,
  [NameSpace.postUserReview]: postCommentData.reducer,
  [NameSpace.setError]: setErrorData.reducer,
  [NameSpace.userData]: getUserData.reducer,
  [NameSpace.reviewSendStatus]: reviewSendStatusData.reducer,
  [NameSpace.favoriteFilms]: favoriteFilmsData.reducer,
});
