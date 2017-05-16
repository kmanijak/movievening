import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './Home';

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});
