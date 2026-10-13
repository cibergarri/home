import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/i18n';
import { ThemeProvider } from '@/theme/ThemeProvider';

// Renders with the real i18n instance and theme provider, as the app does.
export const renderWithProviders = (ui) => render(
  <ThemeProvider>
    <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
  </ThemeProvider>,
);

export { i18n };
