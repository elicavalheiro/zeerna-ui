import {
  purpleDark,
  yellowDark,
  mauveDark,
  blueDark,
  pinkDark,
  greenDark,
  blackA,
  redDark,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...purpleDark,
      ...yellowDark,
      ...mauveDark,
      ...blueDark,
      ...pinkDark,
      ...greenDark,
      ...blackA,
      ...redDark,

      accent1: '$red1',
      accent2: '$red2',
      accent3: '$red3',
      accent4: '$red4',
      accent5: '$red5',
      accent6: '$red6',
      accent7: '$red7',
      accent8: '$red8',
      accent9: '$red9',
      accent10: '$red10',
      accent11: '$red11',
      accent12: '$red12',

      white: '#fff',
    },

    fonts: {
      poppins: 'Poppins, sans-serif',
    },

    space: {
      none: '0px',
      small1: '4px',
      small2: '8px',
      small3: '12px',
      medium1: '16px',
      medium2: '20px',
      medium3: '24px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
    },

    sizes: {
      none: '0px',
      small1: '4px',
      small2: '8px',
      small3: '12px',
      medium1: '16px',
      medium2: '20px',
      medium3: '24px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
    },

    fontSizes: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
    },

    fontWeights: {
      regular: '400',
      semiBold: '600',
      bold: '700',
    },

    radii: {
      none: '0px',
      small: '5px',
      medium: '10px',
      large: '15px',
      circle: '50%',
    },

    shadows: {
      card: '0 2px 8px rgba(0,0,0,0.12)',
    },

    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '9999999999',
    },

    transitions: {},

    lineHeights: {},

    letterSpacings: {},

    borderWidths: {},

    borderStyles: {},
  },

  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },

  utils: {
    m: (value: string | number) => ({
      margin: value,
    }),

    mt: (value: string | number) => ({
      margintTop: value,
    }),

    mb: (value: string | number) => ({
      margintBottom: value,
    }),

    ml: (value: string | number) => ({
      margintLeft: value,
    }),

    mr: (value: string | number) => ({
      marginRight: value,
    }),

    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),

    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    br: (value: string | number) => ({
      borderRadius: value,
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const {
  space,
  colors,
  radii,
  zIndices,
  fonts,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontWeights,
  sizes,
} = config.theme;

export const { media } = config;

export type CSS = Stitches.CSS<typeof config>;