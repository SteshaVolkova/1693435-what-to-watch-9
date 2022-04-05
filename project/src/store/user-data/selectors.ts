import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserLoginData } from '../../types/user-data';

export const getUserLoginData = (state: State): UserLoginData => state[NameSpace.UserData].userLoginData;
