import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import MoviePlayer from '../../pages/movie-player-page/movie-player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppScreenProps = {
  filmCardSrc: string,
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
}

function App({filmCardSrc ,filmCardTitle, filmCardGenre, filmCardYear}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage filmCardSrc={filmCardSrc} filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />}
        />

        <Route
          path={AppRoute.Film}
        >
          <Route
            index
            element={<MoviePage filmCardSrc={filmCardSrc} filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear}/>}
          />
          <Route
            path={AppRoute.FilmReview}
            element={<MoviePageReviews filmCardSrc={filmCardSrc} filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />}
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
              <MyListPage />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Player}
          element={<MoviePlayer />}
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
