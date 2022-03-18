import { useAppDispatch, useAppSelector } from '../../hooks/';
import { updateSelectedGenre } from '../../store/update-selected-genre/update-selected-genre';
import { Link } from 'react-router-dom';

type CatalogGenresListProps = {
  genres: string[],
};

function CatalogGenresList({genres}: CatalogGenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(({SELECTED_GENRE}) => SELECTED_GENRE);

  return (
    <>
      {genres.map((genre) =>(
        <li key={genre} onClick={() => dispatch(updateSelectedGenre(genre))} className={`catalog__genres-item ${genre === activeGenre.selectedGenre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{genre}</Link>
        </li>),
      )}
    </>
  );
}

export default CatalogGenresList;
