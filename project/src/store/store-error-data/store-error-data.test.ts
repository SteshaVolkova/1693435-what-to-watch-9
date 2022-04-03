import { makeFakeStoreError } from '../../utils/mocks';
import { errorData, storeErrorData } from './store-error-data';

const error = makeFakeStoreError();

describe('Reducer: storeErrorData', () => {
  it('without additional parameters should return initial state', () => {
    expect(storeErrorData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({error: ''});
  });

  it('should update error by load error', () => {
    const state = {error: ''};
    expect(storeErrorData.reducer(state, errorData(error)))
      .toEqual({error});
  });
});
