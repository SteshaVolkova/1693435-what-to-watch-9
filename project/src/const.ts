export enum AppRoute {
    Root = '/',
    Login = 'login',
    MyList = 'mylist',
    Film = 'films/:id',
    FilmReview = 'review',
    Player = 'player/:id'
  }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
