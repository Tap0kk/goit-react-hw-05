import axios from 'axios';
import API_TOKEN from './token';

const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesInstance.get(
    '/trending/movie/day?language=en-US'
  );
  return data;
};

const queryParams = {
  include_adult: false,
  language: 'en-US',
};

export const fetchMoviesBySearchValue = async searchValue => {
  const { data } = await moviesInstance.get(
    `search/movie?query=${searchValue}`,
    {
      params: {
        ...queryParams,
        q: searchValue,
      },
    }
  );
  return data;
};

export const fetchMovieDetailsById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}`);
  return data;
};

export const fetchMovieCastById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/credits`);
  return data;
};

export const fetchMovieReviewsById = async id => {
  const { data } = await moviesInstance.get(`/movie/${id}/reviews`);
  return data;
};
