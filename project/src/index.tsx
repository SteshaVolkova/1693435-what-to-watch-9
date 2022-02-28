import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { filmReviews } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={films}
      film={films[0]}
      reviews={filmReviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
