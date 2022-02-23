import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {stars} from './mocks/rating-star';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={films}
      film={films[0]}
      stars={stars}
    />
  </React.StrictMode>,
  document.getElementById('root'));
