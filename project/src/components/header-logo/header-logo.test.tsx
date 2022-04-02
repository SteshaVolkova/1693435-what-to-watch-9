import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import HeaderLogo from './header-logo';

describe('Component: HeaderLogo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HeaderLogo />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('T');

    expect(headerElement).toBeInTheDocument();
  });
});
