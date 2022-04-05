import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getError = (state: State): string => state[NameSpace.SetError].error;
