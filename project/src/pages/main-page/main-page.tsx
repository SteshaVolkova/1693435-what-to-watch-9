import HeaderLogo from '../../components/header-logo/header-logo';
import MainPageContent from '../../components/main-page-content/main-page-content';
import Footer from '../../components/footer/footer';
import HeaderLogin from '../../components/header-login/header-login';
import { useAppSelector } from '../../hooks';
import { getPromoFiilmLoadedDataStatus } from '../../store/promo-film-data/selectors';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import PromoFilm from '../../components/promo-film/promo-film';


function MainPage(): JSX.Element {
  const isPromoFilmLoaded = useAppSelector(getPromoFiilmLoadedDataStatus);

  if (!isPromoFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="film-card">
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <HeaderLogo />
          <HeaderLogin />
        </header>

        <PromoFilm />
      </section>

      <div className="page-content">
        <MainPageContent />

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
