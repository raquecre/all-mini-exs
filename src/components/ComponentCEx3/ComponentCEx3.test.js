import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ComponentCEx3 from './ComponentCEx3';

describe('ComponentCEx3', () => {
  let props;
  let shallowComponentCEx3;
  let renderedComponentCEx3;
  let mountedComponentCEx3;

  const shallowTestComponent = () => {
    if (!shallowComponentCEx3) {
      shallowComponentCEx3 = shallow(<ComponentCEx3 {...props} />);
    }
    return shallowComponentCEx3;
  };

  const renderTestComponent = () => {
    if (!renderedComponentCEx3) {
      renderedComponentCEx3 = render(<ComponentCEx3 {...props} />);
    }
    return renderedComponentCEx3;
  };

  const mountTestComponent = () => {
    if (!mountedComponentCEx3) {
      mountedComponentCEx3 = mount(<ComponentCEx3 {...props} />);
    }
    return mountedComponentCEx3;
  };  

  beforeEach(() => {
    props = {};
    shallowComponentCEx3 = undefined;
    renderedComponentCEx3 = undefined;
    mountedComponentCEx3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
