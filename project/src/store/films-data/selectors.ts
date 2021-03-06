import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getFilmsList = (state: State): Film[] => state[NameSpace.FilmsData].films;
export const getFilmsLoadedDataStatus = (state: State): boolean => state[NameSpace.FilmsData].isDataLoaded;
