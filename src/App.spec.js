import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('renders App', () => {
  it('should render as expected', () => {
    const initialState = { config: { theme: 'normal' } };
    const store = mockStore(initialState);
    const wrapper = shallow(<App store={store} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
