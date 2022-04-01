import { Namespace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getFavoriteFilmsList = (state: State): Film[] => state[Namespace.favoriteFilms].favoriteFilms;
