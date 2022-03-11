import HeaderLogo from '../../components/header-logo/header-logo';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import MainPageContent from '../../components/main-page-content/main-page-content';
import Footer from '../../components/footer/footer';
import HeaderLogin from '../../components/header-login/header-login';
import { useAppSelector } from '../../hooks';


function MainPage(): JSX.Element {
  const {films, promoFilm} = useAppSelector((state) => state);
  const {backgroundImage, name, posterImage} = promoFilm;


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <HeaderLogo />
          <HeaderLogin />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmCardDescription film={promoFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <MainPageContent films={films} />

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
