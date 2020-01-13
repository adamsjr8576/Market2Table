import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  describe('App Component', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(<App />)

      expect(wrapper).toMatchSnapshot();
    });
  });
});
