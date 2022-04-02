import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import ServerErorMessage from './server-error-message';

describe('Component: ServerErorMessage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <ServerErorMessage />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('Something went wrong! Try reloading the page!');

    expect(headerElement).toBeInTheDocument();
  });
});
