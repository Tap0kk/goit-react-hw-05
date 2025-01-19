import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../../api/movies';

import Section from '../../components/Section/Section';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchTrendingMovies = async () => {
    try {
      setIsLoading(true);

      const data = await getTrendingMovies();

      setTrendingMovies(data.results);
      isError !== null ? setIsError(null) : isError;
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (trendingMovies !== null) {
      return;
    }
    fetchTrendingMovies();
  }, []);

  return (
    <Section title={'Tranding today'}>
      {isLoading && <Loader />}
      {isError && <Error err={isError} />}

      <MovieList listOfMovies={trendingMovies} />
    </Section>
  );
};

export default HomePage;
