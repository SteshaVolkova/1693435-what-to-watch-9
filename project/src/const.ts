import { MovieTab } from './types/films';
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

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  FilmsData = 'FILMS_DATA',
  CommentsData = 'COMMENTS_DATA',
  PromoFilmData = 'PROMO_FILM_DATA',
  SimilarFilmsData = 'SIMILAR_FILMS_DATA',
  FavoriteFilms  = 'FAVORITE_FILMS',
  PostUserReview = 'POST_USER_REVIEW',
  SetError = 'SET_ERROR',
  ReviewSendStatus = 'REVIEW_SEND_STATUS',
  ServerStatus = 'SERVER_STATUS',
  SelectedGenre = 'SELECTED_GENRE',
  User = 'USER',
  UserData = 'USER_DATA',
}

export const ZERO_VALUE = 0;
export const DEFAULT_FILM_COUNT = 8;
export const FILMS_PER_PAGE = 8;

export const COMMENT_COLUMN_LENGTH = 2;

export const MAX_COMMENT_LENGTH = 400;
export const MIN_COMMENT_LENGTH = 50;

export const MAX_GENRE_LENGTH = 10;

export const movieTabs: MovieTab[] = [
  {
    'id': 1,
    'title': 'Overview',
  },
  {
    'id': 2,
    'title': 'Details',
  },
  {
    'id': 3,
    'title': 'Reviews',
  },
];

export const stars: Star[] = [
  {'id': 10},{'id': 9},{'id': 8},{'id': 7},{'id': 6},{'id': 5},{'id': 4},{'id': 3},{'id': 2},{'id': 1},
];

export const validatePassword = /^(?=.*\d)(?=.*[a-zA-Z]).*/;

export const validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|ru|yahoo|yandex|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|ua|in|bz|xxx|tel|place)\b/;
