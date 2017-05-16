import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Section from './Section';

describe('<Section />', () => {
  it('renders without crashing', () => {
    shallow(<Section />);
  });
});
