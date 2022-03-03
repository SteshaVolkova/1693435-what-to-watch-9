import { useAppDispatch, useAppSelector } from '../../hooks/';
import { updateSelectedGenre } from '../../store/action';
import { Link } from 'react-router-dom';

type CatalogGenresListProps = {
  genres: string[],
};

function CatalogGenresList({genres}: CatalogGenresListProps): JSX.Element {
  const dipatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.selectedGenre);

  return (
    <>
      {genres.map((genre) =>(
        <li key={genre} onClick={() => dipatch(updateSelectedGenre(genre))} className={`catalog__genres-item ${genre === selectedGenre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{genre}</Link>
        </li>),
      )}
    </>
  );
}

export default CatalogGenresList;
