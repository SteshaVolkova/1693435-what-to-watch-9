import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

const Settings = {
  FILM_CARD_SRC: 'img/bg-the-grand-budapest-hotel.jpg',
  FILM_CARD_TITLE: 'The Grand Budapest Hotel',
  FILM_CARD_GENRE: 'Drama',
  FILN_CARD_YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmCardSrc={Settings.FILM_CARD_SRC}
      filmCardTitle={Settings.FILM_CARD_TITLE}
      filmCardGenre={Settings.FILM_CARD_GENRE}
      filmCardYear={Settings.FILN_CARD_YEAR}
      films={films}
      film={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'));
