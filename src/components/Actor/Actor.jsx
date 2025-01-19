import { noInfo, srcToImageMaker } from '../../tools/toolset';

import s from './Actor.module.css';

const Actor = ({ actorData }) => {
  const { profile_path: path, name, character } = actorData;

  return (
    <div className={s.wrap}>
      <img
        className={s.img}
        src={srcToImageMaker(path)}
        alt={name}
        width="100"
        height="150"
      />

      <div className={s.info}>
        <h3 className={s.name}>{name ? name : noInfo}</h3>

        <p className={s.role}>({character ? character : noInfo})</p>
      </div>
    </div>
  );
};

export default Actor;
