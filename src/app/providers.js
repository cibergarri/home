'use client';

import StyledComponentsRegistry from './registry';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { I18nProvider } from '@/i18n/I18nProvider';

export default function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
