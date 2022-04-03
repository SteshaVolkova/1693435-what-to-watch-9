import { serverStatus, serverStatusData } from './server-status';

describe('Reducer: serverStatusData', () => {
  it('without additional parameters should return initial state', () => {
    expect(serverStatusData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({status: true});
  });

  it('should update serverStatusData to false', () => {
    const state = {status: false};

    expect(serverStatusData.reducer(state, serverStatus(false)))
      .toEqual({status: false});
  });
});
