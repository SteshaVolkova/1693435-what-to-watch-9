import {Link} from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';
import Footer from '../../components/footer/footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
      </header>

      <div className="sign-in user-page__content">
        <h1>404. Page not found</h1>
        <br></br>
        <Link to="/">Go to main page</Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
