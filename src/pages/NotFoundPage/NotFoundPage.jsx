import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.generalHomePage}>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div className={css.formContainer}>
        <p className={css.textPage}>
          Sorry, the page you visited does not exist!
        </p>
        <button className={css.btnPage}>
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
