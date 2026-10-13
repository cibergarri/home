import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import themes from '../../../styles/themes';
import Controls from '.';

const mockDispatch = jest.fn();
const mockChangeLanguage = jest.fn();
let mockTheme = 'normal';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: { language: 'en-GB', changeLanguage: mockChangeLanguage },
    t: (key, options) => (options ? `${key}:${options.theme}` : key),
  }),
}));
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: (selector) => selector({ config: { theme: mockTheme } }),
}));

const render = () => mount(
  <ThemeProvider theme={themes[mockTheme]}>
    <Controls />
  </ThemeProvider>,
);

describe('Controls', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockChangeLanguage.mockClear();
    mockTheme = 'normal';
  });

  it('marks the current language as pressed', () => {
    const wrapper = render();
    const pressed = wrapper.find('button[aria-pressed=true]');
    expect(pressed.text()).toBe('EN');
  });

  it('changes the language when the other option is clicked', () => {
    const wrapper = render();
    wrapper.find('button').filterWhere(b => b.text() === 'ES').simulate('click');
    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
  });

  it('switches to night mode from the light theme', () => {
    const wrapper = render();
    wrapper.find('button[aria-label="toggleTheme:themeDark"]').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('offers the light theme when in night mode', () => {
    mockTheme = 'night';
    const wrapper = render();
    expect(wrapper.find('button[aria-label="toggleTheme:themeLight"]')).toHaveLength(1);
  });
});
