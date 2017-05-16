import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Meetings from './Meetings';

describe('<Meetings />', () => {
  it('renders without crashing', () => {
    shallow(<Meetings />);
  });
});
