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
import { Film } from '../../types/films';
import { FilmReview } from '../../types/films';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  film: Film,
  films: Film[],
  reviews: FilmReview[],
}

function App({ film, films, reviews }: AppScreenProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);

  if ( !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
            element={<MoviePage films={films} reviews={reviews}/>}
          />
          <Route
            path={AppRoute.FilmReview}
            element={<MoviePageReviews films={films} />}
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
          element={<MoviePlayer films={films}/>}
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
