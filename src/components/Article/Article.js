import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Article.css';

const Article = ({ className, children }) => (
  <article className={cx(className, 'article')}>
    {children}
  </article>
);

Article.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Article;
