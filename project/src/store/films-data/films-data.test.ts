import { makeFakeFilmsItem } from '../../utils/mocks';
import { filmsData, loadFilms } from './films-data';

const films = new Array(10).fill(null).map(() => ({makeFakeFilmsItem}));

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({films: [], isDataLoaded: false});
  });

  it('should update films by load films', () => {
    const state = {films: [], isDataLoaded: false};
    expect(filmsData.reducer(state, loadFilms(films)))
      .toEqual({films, isDataLoaded: true});
  });
});
