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

  it('ignores the browser language and defaults to English', () => {
    jest.spyOn(navigator, 'languages', 'get').mockReturnValue(['es-ES', 'es']);
    expect(detectLanguage()).toBe('en');
  });

  it('defaults to English when nothing matches', () => {
    jest.spyOn(navigator, 'languages', 'get').mockReturnValue(['fr-FR', 'de']);
    expect(detectLanguage()).toBe('en');
  });
});
