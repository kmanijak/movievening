import React, { Component } from 'react';
import cx from 'classnames';

import './Movie.css';

const Meta = ({ fieldClassName, icon, dataList }) => (
  dataList.length ? <div className="movie__meta">
    <i className={cx('movie__icon fa', icon)} />
    {dataList.map((data) => <span key={data} className={cx('movie__meta__item', fieldClassName)}>{data}</span>)}
  </div> : null
);

const MovieOverlay = ({ originalTitle, description, countries, duration, genres, languages, year, url }) => (
  <div className="movie__overlay">
    <h4 className="movie__original-title">{originalTitle}</h4>

    <div className="movie__meta movie__meta--flex">
      <span className="movie__duration"><i className="movie__icon fa fa-clock-o" /> {duration}</span>
    </div>

    <Meta fieldClassName="movie__language" icon="fa-comment-o" dataList={languages} />
    <Meta fieldClassName="movie__country" icon="fa-globe" dataList={countries} />
    <Meta fieldClassName="movie__genre" icon="fa-film" dataList={genres} />

    <p className="movie__description">{description}</p>

    <a className="movie__link" href={url} target="_blank"><i className="fa fa-share" /> vod.pl</a>
  </div>
);

class Movie extends Component {
  render() {
    const { url, title, originalTitle, image, description, countries, duration, genres, languages, year } = this.props;
    return (
      <div className="movie">
        <img className="movie__image" src={image} alt={title} />

        <h1 className="movie__title">{title} ({year})</h1>
        <MovieOverlay
          originalTitle={originalTitle}
          countries={countries}
          duration={duration}
          genres={genres}
          languages={languages}
          description={description}
          url={url}
        />
      </div>
    )
  }
}

export default Movie;
