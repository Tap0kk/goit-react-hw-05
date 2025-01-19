import defaultImg from '../images/no-image-default.jpg';

export const noInfo = 'No information available';

export const srcToImageMaker = path => {
  if (path === null) return defaultImg;
  else return `https://image.tmdb.org/t/p/w500/${path}`;
};

export const srcToIMDbMaker = id => {
  if (id === null) return;
  else return `https://www.imdb.com/title/${id}`;
};

export const dataTimeMaker = answer =>
  answer.slice(0, answer.indexOf('.')).replace('T', ' ');
