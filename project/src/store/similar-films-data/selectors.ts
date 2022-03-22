import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getSumilarFilmsList = (state: State): Film[] => state[NameSpace.similarFilmsData].similarFilms;
export const getSimilarLoadedDataStatus = (state: State): boolean => state[NameSpace.commentsData].isDataLoaded;
