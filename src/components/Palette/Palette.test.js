import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Palette from './Palette';

describe('<Palette />', () => {
  it('renders without crashing', () => {
    shallow(<Palette />);
  });
});
