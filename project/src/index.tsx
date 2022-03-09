import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { films } from './mocks/films';
import { filmReviews } from './mocks/reviews';
import { createAPI } from './services/api';
import ErrorMessage from './components/error-message/error-message';
import { fetchFilmsAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

export const api = createAPI();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        films={films}
        film={films[0]}
        reviews={filmReviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
