import { useAppDispatch, useAppSelector } from '../../hooks/';
import { updateSelectedGenre } from '../../store/update-selected-genre/update-selected-genre';
import { Link } from 'react-router-dom';
import { getSelectedGenre } from '../../store/update-selected-genre/selectors';

const MAX_GENRE_LENGTH = 10;

type CatalogGenresListProps = {
  genres: string[],
};

export default function CatalogGenresList({genres}: CatalogGenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(getSelectedGenre);

  return (
    <>
      {genres.map((genre) =>(
        <li key={genre} onClick={() => dispatch(updateSelectedGenre(genre))} className={`catalog__genres-item ${genre === selectedGenre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{genre}</Link>
        </li>),
      ).splice(0, MAX_GENRE_LENGTH)}
    </>
  );
}
