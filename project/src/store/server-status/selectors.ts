import { Namespace } from '../../const';
import { State } from '../../types/state';

export const getServerStatus = (state: State): boolean => state[Namespace.serverStatus].status;
