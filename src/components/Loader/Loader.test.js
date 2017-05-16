import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Loader from './Loader';

describe('<Loader />', () => {
  it('renders without crashing', () => {
    shallow(<Loader />);
  });
});
