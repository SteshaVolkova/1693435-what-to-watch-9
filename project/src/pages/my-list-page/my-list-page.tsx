import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import Footer from '../../components/footer/footer';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />

        <h1 className="page-title user-page__title">My list</h1>

        <HeaderSignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

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
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
