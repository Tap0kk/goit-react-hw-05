import { TbHomeHand } from 'react-icons/tb';

import { Link } from 'react-router-dom';

import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Sorry, this page not found</h2>

      <Link className={s.link} to={'/'}>
        <TbHomeHand className={s.ico} />
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
