import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ComponentBEx3 from './ComponentBEx3';

describe('ComponentBEx3', () => {
  let props;
  let shallowComponentBEx3;
  let renderedComponentBEx3;
  let mountedComponentBEx3;

  const shallowTestComponent = () => {
    if (!shallowComponentBEx3) {
      shallowComponentBEx3 = shallow(<ComponentBEx3 {...props} />);
    }
    return shallowComponentBEx3;
  };

  const renderTestComponent = () => {
    if (!renderedComponentBEx3) {
      renderedComponentBEx3 = render(<ComponentBEx3 {...props} />);
    }
    return renderedComponentBEx3;
  };

  const mountTestComponent = () => {
    if (!mountedComponentBEx3) {
      mountedComponentBEx3 = mount(<ComponentBEx3 {...props} />);
    }
    return mountedComponentBEx3;
  };  

  beforeEach(() => {
    props = {};
    shallowComponentBEx3 = undefined;
    renderedComponentBEx3 = undefined;
    mountedComponentBEx3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
