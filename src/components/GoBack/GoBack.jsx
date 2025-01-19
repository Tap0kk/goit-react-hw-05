import { useNavigate } from 'react-router-dom';

import { TfiBackLeft } from 'react-icons/tfi';

import s from './GoBack.module.css';

const GoBack = ({ path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className={s.wrap}>
      <button className={s.back} type="button" onClick={handleClick}>
        Go back
        <TfiBackLeft className={s.ico} />
      </button>
    </div>
  );
};

export default GoBack;
