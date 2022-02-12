import SmallFilmCard from '../small-film-card/small-film-card';
import HeaderLogo from '../header-logo/header-logo';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import PlayFilmButton from '../play-filn-button/play-filn-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';
import FilmCardMeta from '../film-card-meta/film-card-meta';
import Footer from '../footer/footer';

type MainPageProps = {
  filmCardSrc: string,
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
};

function MainPage({filmCardSrc, filmCardTitle, filmCardGenre, filmCardYear}: MainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmCardSrc} alt={filmCardTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <HeaderLogo />
          <HeaderSignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={filmCardSrc} alt={filmCardTitle} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardTitle}</h2>
              <FilmCardMeta filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />

              <div className="film-card__buttons">
                <PlayFilmButton />
                <AddToMyListButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
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
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard smallFilmCardSrc={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} smallFilmCardName={'Fantastic Beasts: The Crimes of Grindelwald'} />

            <SmallFilmCard smallFilmCardSrc={'img/bohemian-rhapsody.jpg'} smallFilmCardName={'Bohemian Rhapsody'} />

            <SmallFilmCard smallFilmCardSrc={'img/macbeth.jpg'} smallFilmCardName={'Macbeth'} />

            <SmallFilmCard smallFilmCardSrc={'img/aviator.jpg'} smallFilmCardName={'Aviator'} />

            <SmallFilmCard smallFilmCardSrc={'img/we-need-to-talk-about-kevin.jpg'} smallFilmCardName={'We need to talk about Kevin'} />

            <SmallFilmCard smallFilmCardSrc={'img/what-we-do-in-the-shadows.jpg'} smallFilmCardName={'What We Do in the Shadows'} />

            <SmallFilmCard smallFilmCardSrc={'img/revenant.jpg'} smallFilmCardName={'Revenant'} />

            <SmallFilmCard smallFilmCardSrc={'img/johnny-english.jpg'} smallFilmCardName={'Johnny English'} />

            <SmallFilmCard smallFilmCardSrc={'img/shutter-island.jpg'} smallFilmCardName={'Shutter Island'} />

            <SmallFilmCard smallFilmCardSrc={'img/pulp-fiction.jpg'} smallFilmCardName={'Pulp Fiction'} />

            <SmallFilmCard smallFilmCardSrc={'img/no-country-for-old-men.jpg'} smallFilmCardName={'No Country for Old Men'} />

            <SmallFilmCard smallFilmCardSrc={'img/snatch.jpg'} smallFilmCardName={'Snatch'} />

            <SmallFilmCard smallFilmCardSrc={'img/moonrise-kingdom.jpg'} smallFilmCardName={'Moonrise Kingdom'} />

            <SmallFilmCard smallFilmCardSrc={'img/seven-years-in-tibet.jpg'} smallFilmCardName={'Seven Years in Tibet'} />

            <SmallFilmCard smallFilmCardSrc={'img/midnight-special.jpg'} smallFilmCardName={'Midnight Special'} />

            <SmallFilmCard smallFilmCardSrc={'img/war-of-the-worlds.jpg'} smallFilmCardName={'War of the Worlds'} />

            <SmallFilmCard smallFilmCardSrc={'img/dardjeeling-limited.jpg'} smallFilmCardName={'Dardjeeling Limited'} />

            <SmallFilmCard smallFilmCardSrc={'img/orlando.jpg'} smallFilmCardName={'Orlando'} />

            <SmallFilmCard smallFilmCardSrc={'img/mindhunter.jpg'} smallFilmCardName={'Mindhunter'} />

            <SmallFilmCard smallFilmCardSrc={'img/midnight-special.jpg'} smallFilmCardName={'Midnight Special'} />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
