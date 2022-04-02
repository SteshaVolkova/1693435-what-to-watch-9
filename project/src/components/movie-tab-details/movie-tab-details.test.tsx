import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import MovieTabDetails from './movie-tab-details';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <MovieTabDetails film={{
          id: 0,
          name: '',
          posterImage: '',
          previewImage: '',
          backgroundImage: '',
          backgroundColor: '',
          videoLink: '',
          previewVideoLink: '',
          description: '',
          rating: 0,
          scoresCount: 0,
          director: '',
          starring: [''],
          runTime: 0,
          genre: '',
          released: 0,
          isFavorite: false,
        }}
        />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('Run Time');

    expect(headerElement).toBeInTheDocument();
  });
});
