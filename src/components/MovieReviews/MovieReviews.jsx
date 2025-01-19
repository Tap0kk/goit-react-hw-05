import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviewsById } from '../../api/movies';
import { dataTimeMaker } from '../../tools/toolset';
import { FaRegComment } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const params = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const findMovieReviews = async id => {
    try {
      setIsLoading(true);

      const data = await fetchMovieReviewsById(id);

      setMovieReviews(data.results);
      isError !== null ? setIsError(null) : isError;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findMovieReviews(params.movieId);
  }, [params.movieId]);

  return (
    <div className={s.wrap}>
      {isLoading && <Loader />}
      {isError && <Error err={isError} />}

      <h2 className={s.title}>Reviews</h2>

      {Array.isArray(movieReviews) && movieReviews.length === 0 ? (
        <p>There are no comments yet</p>
      ) : (
        <>
          <ul className={s.list}>
            {movieReviews &&
              movieReviews.map(review => {
                return (
                  <li className={s.card} key={review.id}>
                    <div className={s.wrap_comment}>
                      <h3 className={s.author}>
                        <BsPersonWorkspace className={s.ico} />
                        {review.author}
                      </h3>

                      <p className={s.text}>
                        <FaRegComment className={s.ico_comment} />
                        {review.content}
                      </p>

                      <p className={s.date}>
                        <TbCalendarTime className={s.ico} />
                        {dataTimeMaker(review.created_at)}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieReviews;
