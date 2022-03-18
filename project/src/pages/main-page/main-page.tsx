import HeaderLogo from '../../components/header-logo/header-logo';
import MainPageContent from '../../components/main-page-content/main-page-content';
import Footer from '../../components/footer/footer';
import HeaderLogin from '../../components/header-login/header-login';
import { useAppSelector } from '../../hooks';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';


function MainPage(): JSX.Element {
  const {promoFilm} = useAppSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <HeaderLogo />
          <HeaderLogin />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => {
                  navigate(`${AppRoute.Player}/${promoFilm.id}`);
                }}
                className="btn btn--play film-card__button"
                type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddToMyListButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MainPageContent />

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
