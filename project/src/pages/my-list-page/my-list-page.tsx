import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import {Film} from '../../types/films';

type MyListPageProps = {
  films: Film[]
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />

        <h1 className="page-title user-page__title">My list</h1>

        <HeaderSignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
