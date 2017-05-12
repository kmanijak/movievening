import React from 'react';
import cx from 'classnames';

import './Page.css';

const Page = ({ className, children }) => (
  <div className={cx(className, 'page')}>
    {children}
  </div>
);

export default Page;
