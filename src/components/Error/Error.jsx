import styles from './Error.module.css';
import ooopsImg from '../../images/ooops.jpg';

const Error = ({ err }) => {
  return (
    <div className={styles.wrap}>
      <img className={styles.img} src={ooopsImg} alt="Funny face" />

      <div className={styles.message_wrap}>
        <p className={styles.title}>Oooops, something get wrong...</p>

        <p className={styles.text}>The reason is:</p>

        <p className={styles.message}>{err.message}</p>
      </div>
    </div>
  );
};

export default Error;
