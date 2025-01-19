import { Watch } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#ff7f08"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
