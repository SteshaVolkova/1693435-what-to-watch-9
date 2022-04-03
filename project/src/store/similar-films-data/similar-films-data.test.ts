import { makeFakeFilmsItem } from '../../utils/mocks';
import { setSimilarFilms, similarFilmsData } from './similar-films-data';

const similarFilms = new Array(10).fill(null).map(() => ({makeFakeFilmsItem}));

describe('Reducer: similarFilmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(similarFilmsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({similarFilms: [], isDataLoaded: false});
  });

  it('should update films by load films', () => {
    const state = {similarFilms: [], isDataLoaded: false};
    expect(similarFilmsData.reducer(state, setSimilarFilms(similarFilms)))
      .toEqual({similarFilms, isDataLoaded: true});
  });
});
