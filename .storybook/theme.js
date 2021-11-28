import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  // Base Colors
  colorSecondary: '#E5484D',

  // UI
  appBg: 'white',
  appContentBg: '#232326',
  appBorderColor: '#3E3E44',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Jost, sans-serif',
  fontCode: 'Söhne Mono, menlo, monospace',

  // Text colors
  textColor: '#EDEDEF',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#E5484D',
  barBg: '#1C1C1F',

  // Form colors
  inputBg: '#34343A',
  inputBorder: '#3E3E44',
  inputTextColor: '#EDEDEF',
  inputBorderRadius: 4,

  // Branding
  brandTitle: 'Zeerna UI',
  // brandUrl: 'https://example.com',
  // brandImage: 'https://place-hold.it/350x150',
});