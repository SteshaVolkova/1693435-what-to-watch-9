import { makeUserEmptyLoginData, makeFakeUserLoginData } from '../../utils/mocks';
import { getUserData, userData } from './user-data';

const userLoginEmptyData = makeUserEmptyLoginData();
const userLoginData = makeFakeUserLoginData();

describe('Reducer: getUserData', () => {
  it('without additional parameters should return initial state', () => {
    expect(getUserData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({userLoginData: userLoginEmptyData});
  });

  it('should update user data by load user data', () => {
    const state = {userLoginData: userLoginEmptyData};
    expect(getUserData.reducer(state, userData(userLoginData)))
      .toEqual({userLoginData});
  });
});
