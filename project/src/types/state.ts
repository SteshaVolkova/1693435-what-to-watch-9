import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { CommentPost, Film, FilmReview } from './films';
import { ReviewSendStatus, UserLoginData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type SelectedGenre = {
  selectedGenre: string,
};

export type FilmsData = {
  films: Film[],
  isDataLoaded: boolean,
};

export type CommentsData = {
  comments: FilmReview[],
  isDataLoaded: boolean,
};

export type PromoFilmData = {
  promoFilm: Film,
  isDataLoaded: boolean,
};

export type SimilarFilmsData = {
  similarFilms: Film[],
  isDataLoaded: boolean,
}

export type FavoriteFilmsData = {
  favoriteFilms: Film[],
};

export type PostUserReview = {
  userComment: CommentPost,
}

export type ErrorData = {
  error: string,
}

export type UserData = {
  userLoginData: UserLoginData,
}

export type ReviewSendStatusData = {
  reviewSendStatus: ReviewSendStatus,
}

export type ServerStatusData = {
  status: boolean,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
