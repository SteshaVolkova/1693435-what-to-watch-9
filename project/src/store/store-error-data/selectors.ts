import { Namespace } from '../../const';
import { State } from '../../types/state';

export const getError = (state: State): string => state[Namespace.setError].error;
