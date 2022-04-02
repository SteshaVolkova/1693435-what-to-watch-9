import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import HeaderSignIn from './header-sign-in';

describe('Component: HeaderSignIn', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HeaderSignIn />
      </HistoryRouter>,
    );

    const linkElement = screen.getByText('Sign in');

    expect(linkElement).toBeInTheDocument();
  });
});
