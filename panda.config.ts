import { defineConfig } from '@pandacss/dev';
import { button, tuicss } from './src/recipes/tuicss';
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: tuicss.theme,
  jsxFramework: 'solid',
  // The output directory for your css system
  outdir: 'styled-system',
});
// background: { value: '{colors.tui.White255}' },
//         Black168: { value: '#000000' },
//         Blue168: { value: '#0000a8' },
//         Green168: { value: '#00a800' },
//         Cyan168: { value: '#00a8a8' },
//         Red168: { value: '#a80000' },
//         Purple168: { value: '#a800a8' },
//         Yellow168: { value: '#a8a800' },
//         White168: { value: '#a8a8a8' },
//         Orange168: { value: '#a85600' },
//         White255: { value: '#ffffff' },
