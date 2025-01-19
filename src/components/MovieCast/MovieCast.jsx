import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCastById } from '../../api/movies';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Actor from '../Actor/Actor';

import s from './MovieCast.module.css';

const MovieCast = () => {
  const params = useParams();
  const [movieCast, setMovieCast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  // let paramsId = params.movieId;

  const findMovieCast = async id => {
    try {
      setIsLoading(true);

      const data = await fetchMovieCastById(id);

      setMovieCast(data.cast);
      isError !== null ? setIsError(null) : isError;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findMovieCast(params.movieId);
  }, [params.movieId]);

  return (
    <div className={s.wrap}>
      {isLoading && <Loader />}
      {isError && <Error err={isError} />}

      <h2 className={s.title}>Cast</h2>

      {Array.isArray(movieCast) && (
        <>
          <ul className={s.list}>
            {movieCast &&
              movieCast.map(actor => {
                return (
                  <li className={s.card} key={actor.id}>
                    <Actor actorData={actor} />
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieCast;
