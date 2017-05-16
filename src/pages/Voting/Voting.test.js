import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Voting from './Voting';

describe('<Voting />', () => {
  it('renders without crashing', () => {
    shallow(<Voting />);
  });
});
