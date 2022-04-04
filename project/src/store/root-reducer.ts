import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { selectedGenreData } from './selected-genre/selected-genre';
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
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.SelectedGenre]: selectedGenreData.reducer,
  [NameSpace.FilmsData]: filmsData.reducer,
  [NameSpace.CommentsData]: commentsData.reducer,
  [NameSpace.PromoFilmData]: promoFilmData.reducer,
  [NameSpace.SimilarFilmsData]: similarFilmsData.reducer,
  [NameSpace.PostUserReview]: postCommentData.reducer,
  [NameSpace.SetError]: storeErrorData.reducer,
  [NameSpace.UserData]: getUserData.reducer,
  [NameSpace.ReviewSendStatus]: reviewSendStatusData.reducer,
  [NameSpace.FavoriteFilms]: favoriteFilmsData.reducer,
  [NameSpace.ServerStatus]: serverStatusData.reducer,
});
