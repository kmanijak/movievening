import React from 'react';
import { shallow } from 'enzyme';

import Registration from './Registration';

describe('<Registration />', () => {
  it('renders without crashing', () => {
    shallow(<Registration />);
  });
});
