import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-add-review/movie-page-add-review';
import MoviePlayer from '../../pages/movie-player-page/movie-player-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { FilmReview } from '../../types/films';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../types/films';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: FilmReview[],
}

function App({ reviews }: AppScreenProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index
          element={<MainPage />}
        />

        <Route
          path={AppRoute.Film}
        >
          <Route
            index
            element={<MoviePage reviews={reviews}/>}
          />
          <Route
            path={AppRoute.FilmReview}
            element={<MoviePageReviews />}
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
              authorizationStatus={authorizationStatus}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.PlayerFilm}
          element={<MoviePlayer />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
