import { Link, useLocation } from 'react-router-dom';

import MovieListItem from '../MovieListItem/MovieListItem';

import s from './MovieList.module.css';

const MovieList = ({ listOfMovies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {listOfMovies &&
          listOfMovies.map(movie => {
            return (
              <li className={s.item} key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <MovieListItem movie={movie} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
