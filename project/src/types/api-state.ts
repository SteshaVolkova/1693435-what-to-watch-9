import { Film, FilmReview } from './films';

export type ApiState = {
  genre: string,
  countFilmsInList:number,
  films: Film[],
  filmPromo?:Film,
  currentFilm?: Film,
  similarFilms?:Film[],
  favoriteFilms?:Film[],
  filteredFilms:Film[],
  authorizationStatus:boolean,
  comments?:FilmReview[],
  commentSubmitted?:boolean,
};
