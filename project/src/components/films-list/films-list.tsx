import SmallFilmCard from '../small-film-card/small-film-card';
import {Film} from '../../types/films';
import { useState } from 'react';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [selectedFilm, setSelectedFilm] = useState<null | number>(null);
  const hanldeMouseOver = (id: number) => {
    setSelectedFilm(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article className="small-film-card catalog__films-card" key={film.id} onMouseEnter={() => {hanldeMouseOver(film.id);}}>
          <SmallFilmCard film={film}/>
        </article>
      ))}
      {selectedFilm}
    </div>
  );
}

export default FilmsList;
