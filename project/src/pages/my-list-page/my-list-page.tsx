import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderLogin from '../../components/header-login/header-login';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilmsList } from '../../store/favorite-films-data/selectors';


export default function MyListPage(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilmsList);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />

        <h1 className="page-title user-page__title">My list</h1>

        <HeaderLogin />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
