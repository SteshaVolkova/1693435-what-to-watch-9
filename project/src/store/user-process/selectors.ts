import { Namespace } from '../../const';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Namespace.user].authorizationStatus;
