import {Link} from 'react-router-dom';

type CatalogGenresItemProps = {
    className: string,
    genreItemLink: string,
    genreItemTitle: string
}

function CatalogGenresItem({className, genreItemLink, genreItemTitle}: CatalogGenresItemProps): JSX.Element {
  return (
    <li className={className}>
      <Link to={genreItemLink} className="catalog__genres-link">{genreItemTitle}</Link>
    </li>
  );
}

export default CatalogGenresItem;
