import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Login from './Login';

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});
