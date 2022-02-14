type FilmNavigationItemProps = {
    className: string,
    filmNavLink: string,
    filmNavTitle: string
}

function FilmNavigationItem({className, filmNavLink, filmNavTitle}: FilmNavigationItemProps): JSX.Element {
  return (
    <li className={className}>
      <a href={filmNavLink} className="film-nav__link">{filmNavTitle}</a>
    </li>
  );
}

export default FilmNavigationItem;
