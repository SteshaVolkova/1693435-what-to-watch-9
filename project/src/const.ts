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
