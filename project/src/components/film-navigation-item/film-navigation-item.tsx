import {Link} from 'react-router-dom';

type FilmNavigationItemProps = {
    className: string,
    filmNavLink: string,
    filmNavTitle: string
}

function FilmNavigationItem({className, filmNavLink, filmNavTitle}: FilmNavigationItemProps): JSX.Element {
  return (
    <li className={className}>
      <Link to={filmNavLink} className="film-nav__link">{filmNavTitle}</Link>
    </li>
  );
}

export default FilmNavigationItem;
