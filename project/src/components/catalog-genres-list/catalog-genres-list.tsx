import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';

function CatalogGenresList(): JSX.Element {
  return (
    <>
      <CatalogGenresItem className={'catalog__genres-item catalog__genres-item--active'} genreItemLink={'/all-gener'} genreItemTitle={'All genres'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/comedies'} genreItemTitle={'Comedies'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/crime'} genreItemTitle={'Crime'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'documentry'} genreItemTitle={'Documentary'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/drams'} genreItemTitle={'Dramas'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/horror'} genreItemTitle={'Horror'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/kid-familly'} genreItemTitle={'Kids & Family'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/romance'} genreItemTitle={'Romance'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/sci-fi'} genreItemTitle={'Sci-Fi'} />
      <CatalogGenresItem className={'catalog__genres-item'} genreItemLink={'/thrillers'} genreItemTitle={'Thrillers'} />
    </>
  );
}

export default CatalogGenresList;
