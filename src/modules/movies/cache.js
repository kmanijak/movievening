const movieKey = 'movies';

export const setCachedMovies = (movies) => {
  window.sessionStorage.setItem(movieKey, JSON.stringify(movies));
};

export const getCachedMovies = () => {
  const movies = window.sessionStorage.getItem(movieKey);
  return movies ? JSON.parse(movies) : null;
};
