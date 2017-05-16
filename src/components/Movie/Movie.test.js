import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Movie from './Movie';

describe('<Movie />', () => {
  it('renders without crashing', () => {
    shallow(<Movie />);
  });
});
