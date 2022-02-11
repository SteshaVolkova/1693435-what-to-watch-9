import HeaderLogo from '../header-logo/header-logo';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import Footer from '../footer/footer';
import SmallFilmCard from '../small-film-card/small-film-card';
import PlayFilmButton from '../play-filn-button/play-filn-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';

type MoviePageProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
};

function MoviePage({filmCardTitle, filmCardGenre, filmCardYear}: MoviePageProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={filmCardTitle} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <HeaderLogo />

            <HeaderSignOut />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCardTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCardGenre}</span>
                <span className="film-card__year">{filmCardYear}</span>
              </p>

              <div className="film-card__buttons">
                <PlayFilmButton />
                <AddToMyListButton />
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/overview" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/details" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/review" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`&apos;`s friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotel`&apos;`s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave`&apos;`s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <SmallFilmCard smallFilmCardSrc={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} smallFilmCardName={'Fantastic Beasts: The Crimes of Grindelwald'} />

            <SmallFilmCard smallFilmCardSrc={'img/bohemian-rhapsody.jpg'} smallFilmCardName={'Bohemian Rhapsody'} />

            <SmallFilmCard smallFilmCardSrc={'img/macbeth.jpg'} smallFilmCardName={'Macbeth'} />

            <SmallFilmCard smallFilmCardSrc={'img/aviator.jpg'} smallFilmCardName={'Aviator'} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
