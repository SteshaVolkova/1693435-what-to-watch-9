import {PropsWithChildren, ReactNode} from 'react';
import FilmCardMeta from '../film-card-meta/film-card-meta';
import PlayFilmButton from '../play-filn-button/play-filn-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';

type FilmCardDescriptionProps = PropsWithChildren<{
    filmCardTitle: string,
    filmCardGenre: string,
    filmCardYear: number,
    children?: ReactNode | undefined,
}>

function FilmCardDescription({filmCardTitle, filmCardGenre, filmCardYear, children}: FilmCardDescriptionProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{filmCardTitle}</h2>
      <FilmCardMeta filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />

      <div className="film-card__buttons">
        <PlayFilmButton />
        <AddToMyListButton />
        {children}
      </div>
    </div>
  );
}

export default FilmCardDescription;
