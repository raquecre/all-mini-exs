import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ComponentA-Ex3 from './ComponentA-Ex3';

describe('ComponentA-Ex3', () => {
  let props;
  let shallowComponentA-Ex3;
  let renderedComponentA-Ex3;
  let mountedComponentA-Ex3;

  const shallowTestComponent = () => {
    if (!shallowComponentA-Ex3) {
      shallowComponentA-Ex3 = shallow(<ComponentA-Ex3 {...props} />);
    }
    return shallowComponentA-Ex3;
  };

  const renderTestComponent = () => {
    if (!renderedComponentA-Ex3) {
      renderedComponentA-Ex3 = render(<ComponentA-Ex3 {...props} />);
    }
    return renderedComponentA-Ex3;
  };

  const mountTestComponent = () => {
    if (!mountedComponentA-Ex3) {
      mountedComponentA-Ex3 = mount(<ComponentA-Ex3 {...props} />);
    }
    return mountedComponentA-Ex3;
  };  

  beforeEach(() => {
    props = {};
    shallowComponentA-Ex3 = undefined;
    renderedComponentA-Ex3 = undefined;
    mountedComponentA-Ex3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
