import { makeFakeGenre } from '../../utils/mocks';
import { selectedGenreData, updateSelectedGenre } from './selected-genre';

const selectedGenre = makeFakeGenre();

describe('Reducer: selectedGenre', () => {
  it('without additional parameters should return initial state', () => {
    expect(selectedGenreData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({selectedGenre: 'All genres'});
  });

  it('should update genres by load genres', () => {
    const state = {selectedGenre: 'All genres'};
    expect(selectedGenreData.reducer(state, updateSelectedGenre(selectedGenre)))
      .toEqual({selectedGenre});
  });
});
