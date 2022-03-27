import SmallFilmCard from '../small-film-card/small-film-card';
import {Film} from '../../types/films';

type FilmsListProps = {
  films: Film[];
};

export default function FilmsList({films}: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard key={film.id} film={film}/>
      ))}
    </div>
  );
}
