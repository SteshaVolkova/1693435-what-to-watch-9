import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page-content">
      <section className="catalog">
        <h1>404. Page not found</h1>
        <br></br>
        <Link to="/">Go to main page</Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
