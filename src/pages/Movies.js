import React, { Component } from 'react';

import MoviesContainer from '../modules/movies';

import Page from './Page';
import Movie from '../components/Movie';
import Loader from '../components/Loader';

import './Movies.css';

class Movies extends Component {
  state = {
    pending: true,
    movies: []
  };

  scrollable = null;

  componentDidMount() {
    MoviesContainer.getNextPage().then(() => {
      this.setState({
        pending: false,
        movies: MoviesContainer.getMovies(),
      })
    });

    this.scrollable.addEventListener('scroll', this.shouldGetNextMovies, false);
  }

  componentWillUnmount() {
    this.scrollable.removeEventListener('scroll', this.shouldGetNextMovies, false);
  }

  shouldGetNextMovies = () => {
    const { offsetHeight, scrollHeight, scrollTop } = this.scrollable;

    if (scrollTop > scrollHeight - offsetHeight - 40) {
      this.getNextMovies();
    }
  };

  getNextMovies = () => {
    this.setState({
      pending: true,
    });
    if (MoviesContainer.isNextPageAvailabe()) {
      MoviesContainer.getNextPage().then(() => {
        this.setState({
          movies: MoviesContainer.getMovies(),
          pending: false,
        });
      })
    }
  };

  render() {
    const { pending, movies } = this.state;

    return (
      <Page>
        <div className="page__movies" ref={ref => this.scrollable = ref}>
          {movies.map(
            ({ url, title, originalTitle, image, description, countries, duration, genres, languages, year }, index) => (
              <Movie
                key={`${index}-${title}`}
                title={title}
                originalTitle={originalTitle}
                url={url}
                image={image}
                description={description}
                countries={countries}
                duration={duration}
                genres={genres}
                languages={languages}
                year={year}
              />
            )
          )}
        </div>
        {pending && <Loader />}
      </Page>
    )
  }
}

export default Movies;
