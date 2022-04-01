import { Namespace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getPromoFilmList = (state: State): Film => state[Namespace.promoFilmData].promoFilm;
export const getPromoFiilmLoadedDataStatus = (state: State): boolean => state[Namespace.promoFilmData].isDataLoaded;
