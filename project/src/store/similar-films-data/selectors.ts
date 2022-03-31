import { Namespace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getSumilarFilmsList = (state: State): Film[] => state[Namespace.similarFilmsData].similarFilms;
export const getSimilarLoadedDataStatus = (state: State): boolean => state[Namespace.commentsData].isDataLoaded;
