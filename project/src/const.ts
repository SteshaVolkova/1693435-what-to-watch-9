export enum AppRoute {
    Root = '/',
    Login = '/login',
    MyList = '/mylist',
    Film = 'films/:id',
    FilmReview = 'review',
    PlayerFilm = '/player/:id',
    Player ='/player'
  }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  SimilarFilm = '/films/:id/similar',
  PromoFilm = '/promo',
  FavoriteFilms = '/favorite',
  CommentsFilm = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
