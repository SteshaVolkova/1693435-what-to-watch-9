import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { films } from './mocks/films';
import { filmReviews } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        films={films}
        film={films[0]}
        reviews={filmReviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
