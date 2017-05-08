import React from 'react';
import cx from 'classnames';

import './Error.css';

const Error = ({ className, error }) => (
  <p className={cx(className, 'error')}>{error}</p>
);

export default Error;
