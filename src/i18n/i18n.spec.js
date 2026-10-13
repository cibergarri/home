import { detectLanguage, rememberLanguage } from '.';

describe('language detection', () => {
  beforeEach(() => {
    document.cookie = 'my_language=; max-age=0; path=/';
  });

  it('prefers an explicit choice stored in the cookie', () => {
    rememberLanguage('es');
    jest.spyOn(navigator, 'languages', 'get').mockReturnValue(['en-GB']);
    expect(detectLanguage()).toBe('es');
  });

  it('falls back to the first supported browser language', () => {
    jest.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR', 'es-ES', 'en']);
    expect(detectLanguage()).toBe('es');
  });

  it('defaults to English when nothing matches', () => {
    jest.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR', 'de']);
    expect(detectLanguage()).toBe('en');
  });
});
