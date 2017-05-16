import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Article from './Article';

describe('<Article />', () => {
  it('renders without crashing', () => {
    shallow(<Article />);
  });

  it('renders children', () => {
    const children = [<div key="1" />, <div key="2" />, <div key="3" />];
    const wrapper = shallow(<Article>
      {children}
    </Article>);

    expect(wrapper.children()).to.have.length(children.length);
  })
});
