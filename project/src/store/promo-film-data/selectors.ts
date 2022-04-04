import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getPromoFilmList = (state: State): Film => state[NameSpace.PromoFilmData].promoFilm;
export const getPromoFiilmLoadedDataStatus = (state: State): boolean => state[NameSpace.PromoFilmData].isDataLoaded;
