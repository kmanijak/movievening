import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Movies from './Movies';

describe('<Movies />', () => {
  it('renders without crashing', () => {
    shallow(<Movies />);
  });
});
