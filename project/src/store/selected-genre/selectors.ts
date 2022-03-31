import { Namespace } from '../../const';
import { State } from '../../types/state';

export const getSelectedGenre = (state: State): string => state[Namespace.selectedGenre].selectedGenre;
