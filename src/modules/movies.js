import { getVODMovies } from './http';

class MovieContainer {
  movies = [];
  page = 0;

  getNextPage() {
    if (this.page != null) {
      this.page += 1;
      return getVODMovies(this.page).then(newMovies => {
        this.movies = this.movies.concat(newMovies);
        if (!newMovies.length) {
          this.page = null;
        }
      });
    } else {
      return new Promise(() => {});
    }
  }

  isNextPageAvailabe = () => {
    return this.page != null
  };

  getMovies = () => {
    return this.movies;
  };
}

export default new MovieContainer();
