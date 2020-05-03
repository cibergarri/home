import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import CustomHeader from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: {} }),
}));
jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useSelector: () => 'normal',
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = { config: { theme: 'normal' } };
const store = mockStore(initialState);

describe('CustomHeader', () => {
  it('should render as expected', () => {
    const tree = shallow(<CustomHeader store={store} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
