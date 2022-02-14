type CatalogGenresItemProps = {
    className: string,
    genreItemLink: string,
    genreItemTitle: string
}

function CatalogGenresItem({className, genreItemLink, genreItemTitle}: CatalogGenresItemProps): JSX.Element {
  return (
    <li className={className}>
      <a href={genreItemLink} className="catalog__genres-link">{genreItemTitle}</a>
    </li>
  );
}

export default CatalogGenresItem;
