import React from 'react';
import cx from 'classnames';

import './Article.css';

const Article = ({ className, children }) => (
  <article className={cx(className, 'article')}>
    {children}
  </article>
);

export default Article;
