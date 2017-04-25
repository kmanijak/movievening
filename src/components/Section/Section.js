import React from 'react';
import cx from 'classnames';

import Header from '../Header';
import Article from '../Article';

import './Section.css';

const Section = ({ className, children, header, article }) => (
  <div className={cx(className, 'section')}>
    <Header header={header} />
    <Article>
      <p>{article}</p>
    </Article>
  </div>
);

export default Section;
