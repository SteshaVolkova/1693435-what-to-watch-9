import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getSumilarFilmsList = (state: State): Film[] => state[NameSpace.SimilarFilmsData].similarFilms;
export const getSimilarLoadedDataStatus = (state: State): boolean => state[NameSpace.CommentsData].isDataLoaded;
