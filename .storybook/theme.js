import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Base Colors
  colorSecondary: '#E5484D',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#EDEDEF',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Jost, sans-serif',
  fontCode: 'Söhne Mono, menlo, monospace',

  // Text colors
  textColor: '#242424',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#E5484D',
  barBg: '#EDEDEF',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  // Branding
  brandTitle: 'Zeerna UI',
  // brandUrl: 'https://example.com',
  // brandImage: 'https://place-hold.it/350x150',
});