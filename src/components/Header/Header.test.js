import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders children', () => {
    const header = 'Header';
    const wrapper = shallow(<Header header={header} />);

    expect(wrapper.text()).to.equal(header);
  })
});
