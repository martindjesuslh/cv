import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

const theme = providePrimeNG({
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
      cssLayer: {
        name: 'primeng',
        order: 'tailwind-base ,theme, base, primeng',
      },
    },
  },
});

export default theme;
