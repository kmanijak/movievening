import React from 'react';
import cx from 'classnames';

import './Header.css';

const Header = ({ className, header }) => (
  <h1 className={cx(className, 'header')}>{header}</h1>
);

export default Header;
