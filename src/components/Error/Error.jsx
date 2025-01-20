import s from './Error.module.css';
import ooopsImg from '../../images/ooops.jpg';

const Error = ({ err }) => {
  return (
    <div className={s.wrap}>
      <img className={s.img} src={ooopsImg} alt="Funny face" />

      <div className={s.message_wrap}>
        <p className={s.title}>Oooops, something get wrong...</p>

        <p className={s.text}>The reason is:</p>

        <p className={s.message}>{err.message}</p>
      </div>
    </div>
  );
};

export default Error;
