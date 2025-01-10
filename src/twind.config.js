import { defineConfig } from '@twind/core';

// Importando as fontes
import '@fontsource/alegreya-sans';
import '@fontsource/inter';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        LidereAzul62: '#3B4AFF',
        LiderePreto10: '#ECECEC',
        LiderePreto100: '#000000',
        Vermelho95: '#FFEAE5',
        Vermelho85: '#FFC1B3',
        Vermelho35: '#B22400',
        Cinza: '#8B99A7',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
        campuni: ['Campuni', 'sans-serif'], // Adicionando a fonte Campuni
        alegreya: ['Alegreya Sans', 'sans-serif'], // Adicionando a fonte Alegreya Sans
        inter: ['Inter', 'sans-serif'], // Adicionando a fonte Inter
      },
    },
  },
});