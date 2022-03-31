import { Namespace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getFilmsList = (state: State): Film[] => state[Namespace.filmsData].films;
export const getFilmsLoadedDataStatus = (state: State): boolean => state[Namespace.filmsData].isDataLoaded;
