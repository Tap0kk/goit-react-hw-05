import { TbHomeHand } from 'react-icons/tb';

import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Sorry, this page not found</h2>

      <Link className={styles.link} to={'/'}>
        <TbHomeHand className={styles.ico} />
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
