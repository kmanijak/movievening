import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Error from './Error';

describe('<Error />', () => {
  it('renders without crashing', () => {
    shallow(<Error />);
  });

  it('renders children', () => {
    const error = 'Test error';
    const wrapper = shallow(<Error error={error} />);

    expect(wrapper.text()).to.equal(error);
  })
});
