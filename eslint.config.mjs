import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    files: ['*.config.js', 'jest.setup.js', '.cz-config.js', 'commitlint.config.js', 'release.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'writable',
        require: 'readonly',
      },
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'public/**', 'src/icons/**']),
]);
