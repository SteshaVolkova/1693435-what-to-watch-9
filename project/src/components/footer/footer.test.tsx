import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Footer from './footer';

describe('Component: HeaderLogo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Footer />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('© 2019 What to watch Ltd.');

    expect(headerElement).toBeInTheDocument();
  });
});
