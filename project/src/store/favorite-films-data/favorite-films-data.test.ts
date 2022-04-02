import { makeFakeFilmsItem } from '../../utils/mocks';
import { favoriteFilmsData, loadFavoriteFilms } from './favorite-films-data';

const favoriteFilms = new Array(10).fill(null).map(() => ({makeFakeFilmsItem}));

describe('Reducer: favoriteFilmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoriteFilmsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({favoriteFilms: []});
  });

  it('should update films by load films', () => {
    const state = {favoriteFilms: []};
    expect(favoriteFilmsData.reducer(state, loadFavoriteFilms(favoriteFilms)))
      .toEqual({favoriteFilms});
  });
});
