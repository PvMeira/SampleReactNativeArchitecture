import {lighten, darken} from 'polished';
import {SystemColors} from '../config/styles/default-config';

const colors = {
  primary: SystemColors.primary,
  secondary: SystemColors.secondary,
  primaryLight1: lighten(0.1, SystemColors.primary),
  primaryLight2: lighten(0.2, SystemColors.primary),
  primaryLight3: lighten(0.3, SystemColors.primary),
  primaryLight4: lighten(0.4, SystemColors.primary),
  primaryDark1: darken(0.1, SystemColors.primary),
  primaryDark2: darken(0.2, SystemColors.primary),
  primaryDark3: darken(0.3, SystemColors.primary),
  primaryDark4: darken(0.4, SystemColors.primary),
  secondaryLight1: lighten(0.1, SystemColors.primary),
  secondaryLight2: lighten(0.2, SystemColors.primary),
  secondaryLight3: lighten(0.3, SystemColors.primary),
  secondaryLight4: lighten(0.4, SystemColors.primary),
  secondaryDark1: darken(0.1, SystemColors.primary),
  secondaryDark2: darken(0.2, SystemColors.primary),
  secondaryDark3: darken(0.3, SystemColors.primary),
  secondaryDark4: darken(0.4, SystemColors.primary),
  white: '#ffffff',
  whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
  neutralLight98: '#fbfbfb',
  neutralLight90: '#eceeee',
  neutralLight80: '#dadedf',
  neutralLight60: '#b6bdbf',
  neutralLight40: '#9da7a9',
  neutralAlpha45: 'rgba(74, 92, 96, 0.45)',
  neutral: '#4a5c60',
  neutralDark40: '#2c3739',
  neutralDark60: '#1d2426',
  blackAlpha10: 'rgba(0, 0, 0, 0.1)',
  blackAlpha15: 'rgba(0, 0, 0, 0.15)',
  blackAlpha30: 'rgba(0, 0, 0, 0.3)',
  black: '#000000',
  success: '#00b28e',
  warning: '#ea9b3e',
  danger: '#c64840',
  dangerDark5: '#bb443c',
  dangerDark20: '#9e3933',
  dangerDark40: '#762b26',
  transparent: 'transparent',
  error: '#c64840',
  borderDefault: '#afdedc',
};

export default colors;
