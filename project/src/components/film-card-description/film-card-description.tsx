import {PropsWithChildren, ReactNode} from 'react';
import FilmCardMeta from '../film-card-meta/film-card-meta';
import PlayFilmButton from '../play-filn-button/play-filn-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import {Film} from '../../types/films';

type FilmCardDescriptionProps = PropsWithChildren<{
    children?: ReactNode | undefined,
    film: Film,
}>

function FilmCardDescription({children, film}: FilmCardDescriptionProps): JSX.Element {
  const {name, genre, released} = film;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <FilmCardMeta filmCardGenre={genre} filmCardYear={released} />

      <div className="film-card__buttons">
        <PlayFilmButton />
        <AddToMyListButton />
        {children}
      </div>
    </div>
  );
}

export default FilmCardDescription;
