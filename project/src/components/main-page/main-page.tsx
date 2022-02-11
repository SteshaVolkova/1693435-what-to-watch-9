import SmallFilmCard from '../small-film-card/small-film-card';
import HeaderLogo from '../header-logo/header-logo';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import PlayFilmButton from '../play-filn-button/play-filn-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import Footer from '../footer/footer';

type MainPageProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
};

function MainPage({filmCardTitle, filmCardGenre, filmCardYear}: MainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={filmCardTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <HeaderLogo />
          <HeaderSignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={filmCardTitle} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCardGenre}</span>
                <span className="film-card__year">{filmCardYear}</span>
              </p>

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
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="/all-gener" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/comedies" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/crime" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/documentry" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/drams" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/horror" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/kid-familly" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/romance" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/sci-fi" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/thrillers" className="catalog__genres-link">Thrillers</a>
            </li>
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
