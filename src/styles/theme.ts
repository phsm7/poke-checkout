export default {
  colors: {
    background: '#E5E5E5',
    black: '#000000',
    blackSecondary: '#282828',
    blue: '#6892FC',
    blueSecondary: '#4F74E8',
    footerText: '#626262',
    grayLight: '#DFDFDF',
    grayLightx: '#e5e5e5',
    grayLightxx: '#c4c4c4',
    gray: '#9D9D9D',
    grayDark: '#565656',
    grayDarkx: '#484848',
    red: '#FF0000',
    white: '#FFFFFF',
    yellow: '#FFD400',
  },

  font: {
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3.2rem',
      big: '4.8rem',
      xbig: '5.2rem',
    },
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },

  media: {
    query: (breakpoint: string) => `@media (max-width: ${breakpoint}px)`,
    queryDesktop: (breakpoint: string) => `@media (min-width: ${breakpoint}px)`,
  },
} as const;
