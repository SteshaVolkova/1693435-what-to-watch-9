import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getSelectedGenre = (state: State): string => state[NameSpace.selectedGenre].selectedGenre;
