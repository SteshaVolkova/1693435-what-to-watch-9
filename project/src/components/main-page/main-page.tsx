import SmallFilmCard from '../small-film-card/small-film-card';
import HeaderLogo from '../header-logo/header-logo';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import CatalogGenresList from '../catalog-genres-list/catalog-genres-list';
import FilmCardDescription from '../film-card-description/film-card-description';
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

            <FilmCardDescription filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <CatalogGenresList />
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
