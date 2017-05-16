import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Title from './Title';

describe('<Title />', () => {
  it('renders without crashing', () => {
    shallow(<Title />);
  });
});
