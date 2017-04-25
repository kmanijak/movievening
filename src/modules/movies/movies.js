import { getVODMovies } from './utils';

class MovieContainer {
  movies = [];
  site = -1;

  getNextPage() {
    if (this.site != null) {
      this.site += 1;
      return getVODMovies(this.site).then(newMovies => {
        this.movies = this.movies.concat(newMovies);
        if (!newMovies.length) {
          this.site = null;
        }
      });
    } else {
      return new Promise(() => {});
    }
  }

  isNextPageAvailabe = () => {
    return this.site != null
  };

  getMovies = () => {
    return this.movies;
  };
}

export default new MovieContainer();
