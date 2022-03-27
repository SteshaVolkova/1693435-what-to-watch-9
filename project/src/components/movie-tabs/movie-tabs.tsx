import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import { FilmReview } from '../../types/films';
import MovieTabOverview from '../movie-tab-overview/movie-tab-overview';
import MovieTabDetails from '../movie-tab-details/movie-tab-details';
import MovieTabReview from '../movie-tab-review/movie-tab-review';

type MovieTabsProps = {
    film: Film,
    reviews: FilmReview[],
}

type MovieTab = {
  'id': number,
  title: string
}

export default function MovieTabs({ film, reviews }:MovieTabsProps): JSX.Element {
  const movieTabs: MovieTab[] = [
    {
      'id': 1,
      'title': 'Overview',
    },
    {
      'id': 2,
      'title': 'Details',
    },
    {
      'id': 3,
      'title': 'Reviews',
    },
  ];

  const [isActive, setIsActive] = useState<number>(1);
  const hanldeOpenTab = (id: number) => {
    setIsActive(id);
  };


  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {movieTabs.map((tab) => (
            <li key={tab.id} className={`film-nav__item ${tab.id === isActive ? 'film-nav__item--active' : ''}`} onClick={() => {hanldeOpenTab(tab.id);}}>
              <Link className="film-nav__link" to={''}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isActive === 1 && <MovieTabOverview film={film}/>}
      {isActive === 2 && <MovieTabDetails film={film} />}
      {isActive === 3 && <MovieTabReview reviews={reviews}/>}
    </div>
  );
}
