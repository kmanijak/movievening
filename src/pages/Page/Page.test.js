import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Page from './Page';

describe('<Page />', () => {
  it('renders without crashing', () => {
    shallow(<Page />);
  });
});
