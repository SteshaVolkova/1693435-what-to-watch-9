import { Star } from './types/rating-stars';

export enum AppRoute {
    Root = '/',
    Login = '/login',
    MyList = '/mylist',
    Film = 'films/:id',
    FilmPage = '/films',
    FilmReview = 'review',
    PlayerFilm = '/player/:id',
    Player = '/player',
    NotFound = '/404',
  }


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  SimilarFilm = '/films/:id/similar',
  PromoFilm = '/promo',
  FavoriteFilms = '/favorite',
  CommentsFilm = '/comments',
  CommentPost = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  filmsData = 'FILMS_DATA',
  commentsData = 'COMMENTS_DATA',
  promoFilmData = 'PROMO_FILM_DATA',
  similarFilmsData = 'SIMILAR_FILMS_DATA',
  favoriteFilms  = 'FAVORITE_FILMS',
  postUserReview = 'POST_USER_REVIEW',
  setError = 'SET_ERROR',
  reviewSendStatus = 'REVIEW_SEND_STATUS',
  selectedGenre = 'SELECTED_GENRE',
  user = 'USER',
  userData = 'USER_DATA',
}

export const ZERO_VALUE = 0;
export const DEFAULT_FILM_COUNT = 8;
export const FILMS_PER_PAGE = 8;

export const COMMENT_COLUMN_LENGTH = 2;

export const MAX_COMMENT_LENGTH = 400;
export const MIN_COMMENT_LENGTH = 50;

export const MAX_GENRE_LENGTH = 10;

export const stars: Star[] = [
  {'id': 10},{'id': 9},{'id': 8},{'id': 7},{'id': 6},{'id': 5},{'id': 4},{'id': 3},{'id': 2},{'id': 1},
];
