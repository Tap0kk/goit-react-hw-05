import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMovieDetailsById } from '../../api/movies';
import { srcToImageMaker, srcToIMDbMaker } from '../../tools/toolset';
import imdblogo from '../../images/imdb-logo.png';

import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import GoBack from '../../components/GoBack/GoBack';

import clsx from 'clsx';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const params = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const prevLocation = location.state?.from || '/';

  const linkClass = ({ isActive }) => clsx(s.link, isActive && s.active_link);

  const findMovieDetails = async id => {
    try {
      setIsLoading(true);

      const data = await fetchMovieDetailsById(id);

      setMovieDetails(data);
      isError !== null ? setIsError(null) : isError;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findMovieDetails(params.movieId);
  }, [params.movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error err={isError} />}

      <GoBack path={prevLocation} />

      {movieDetails && (
        <>
          <div className={s.details_wrap}>
            <img
              src={srcToImageMaker(movieDetails.poster_path)}
              alt={movieDetails.title}
            />

            <div className={s.details}>
              <p className={s.genres}>
                {Object.values(movieDetails.genres)
                  .map(genre => genre.name)
                  .join(' • ')}
              </p>

              <h2 className={s.title}>
                {movieDetails.title}{' '}
                <span className={s.year}>
                  ({movieDetails.release_date.slice(0, 4)})
                </span>
              </h2>

              {movieDetails.tagline !== '' && (
                <p className={s.tagline}>&quot;{movieDetails.tagline}&quot;</p>
              )}

              <p className={s.overview}>{movieDetails.overview}</p>

              <ul className={s.details_list}>
                <li>
                  Origin country:{' '}
                  <span className={s.underlined}>
                    {movieDetails.origin_country}
                  </span>
                </li>

                <li>
                  Runtime:{' '}
                  <span className={s.underlined}>{movieDetails.runtime}</span>{' '}
                  min
                </li>

                <li>
                  <div className={s.rating_wrap}>
                    Rating:
                    <a
                      target="_blank"
                      href={srcToIMDbMaker(movieDetails.imdb_id)}
                    >
                      <img src={imdblogo} alt="IMDb logo" />
                    </a>
                    <span className={s.underlined}>
                      {movieDetails.vote_average} ({movieDetails.vote_count})
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className={s.link_wrap}>
              <NavLink
                className={linkClass}
                to={`/movies/${params.movieId}/cast`}
                state={{ from: prevLocation }}
              >
                {' '}
                Cast{' '}
              </NavLink>

              <NavLink
                className={linkClass}
                to={`/movies/${params.movieId}/reviews`}
                state={{ from: prevLocation }}
              >
                {' '}
                Reviews{' '}
              </NavLink>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
