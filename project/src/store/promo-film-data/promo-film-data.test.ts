import { makeFilmEmptyItem, makeFakeFilmsItem } from '../../utils/mocks';
import { promoFilmData, setPromoFilm } from './promo-film-data';

const promoFilm = makeFakeFilmsItem();
const promoFilmEmpty = makeFilmEmptyItem();

describe('Reducer: promoFilmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(promoFilmData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({promoFilm: promoFilmEmpty, isDataLoaded: false});
  });

  it('should update films by load films', () => {
    const state = {promoFilm: promoFilmEmpty, isDataLoaded: false};
    expect(promoFilmData.reducer(state, setPromoFilm(promoFilm)))
      .toEqual({promoFilm, isDataLoaded: true});
  });
});
