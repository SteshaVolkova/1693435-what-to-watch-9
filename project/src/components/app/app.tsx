import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-add-review/movie-page-add-review';
import MoviePlayer from '../../pages/movie-player-page/movie-player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Film} from '../../types/films';

type AppScreenProps = {
  filmCardSrc: string,
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,
  film: Film,
  films: Film[],
}

function App({filmCardSrc ,filmCardTitle, filmCardGenre, filmCardYear, film, films}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage film={film} films={films} />}
        />

        <Route
          path={AppRoute.Film}
        >
          <Route
            index
            element={<MoviePage film={film} films={films}/>}
          />
          <Route
            path={AppRoute.FilmReview}
            element={<MoviePageReviews film={film} />}
          />
        </Route>

        <Route
          path={AppRoute.Login}
          element={<SignInPage />}
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Player}
          element={<MoviePlayer film={film}/>}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
