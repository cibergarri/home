import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import { CustomHeader } from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: {}, t: (key) => key }),
}));
jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useSelector: () => 'normal',
}));

describe('CustomHeader', () => {
  it('should render as expected', () => {
    const tree = shallow(<CustomHeader theme={{ main: { name: 'normal' } }} />);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });

  it('keeps the typewriter hero', () => {
    const tree = shallow(<CustomHeader theme={{ main: { name: 'normal' } }} />);
    expect(tree.find('#background-image')).toHaveLength(1);
    expect(tree.text()).toContain('<hate \\>');
    expect(tree.text()).toContain('<heart \\>');
  });
});
