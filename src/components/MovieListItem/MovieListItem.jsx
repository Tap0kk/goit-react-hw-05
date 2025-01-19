import { srcToImageMaker } from '../../tools/toolset';

import s from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { backdrop_path: path, title } = movie;

  return (
    <div>
      <img className={s.img} src={srcToImageMaker(path)} alt={title} />

      <p className={s.title}>{title}</p>
    </div>
  );
};

export default MovieListItem;
