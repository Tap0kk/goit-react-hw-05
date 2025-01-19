import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ImSearch } from 'react-icons/im';
import {
  emptyFieldMessage,
  noMatchesMessage,
} from '../../messages/toastMessages.js';
import { fetchMoviesBySearchValue } from '../../api/movies.js';

import MovieList from '../../components/MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';

import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [fetchedMovies, setFetchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  let inputValue = '';

  const findMoviesByQuery = async searchValue => {
    try {
      setIsLoading(true);

      const data = await fetchMoviesBySearchValue(searchValue);

      if (data.results.length === 0) {
        return noMatchesMessage(searchValue);
      } else setFetchedMovies(data.results);

      isError !== null ? setIsError(null) : isError;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = event => {
    inputValue = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return emptyFieldMessage();
    }
    setSearchParams({ q: inputValue });

    findMoviesByQuery(inputValue);

    event.target.reset();
  };

  useEffect(() => {
    const q = searchParams.get('q');

    if (q) {
      findMoviesByQuery(q);
    }
  }, [searchParams]);

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.btn} type="submit">
          <ImSearch className={s.ico} />
        </button>

        <input
          className={s.input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
      </form>

      {isLoading && <Loader />}
      {isError && <Error err={isError} />}

      {fetchedMovies !== null && <MovieList listOfMovies={fetchedMovies} />}
    </div>
  );
};

export default MoviesPage;
