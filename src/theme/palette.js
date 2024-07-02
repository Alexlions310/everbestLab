import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  10: '#F3F5F7',
  100: '#2A85FF',
  200: '#F4F6F8',
  250: '#F3F5F7',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  650: '#6F767E',
  660: 'rgba(175, 175, 175, 0.2)',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  950: '#1A1D1F',
  960: '#111315',
  970: '#1D1E20',
  1000: '#000000',
};

export const primary = {
  // lighter: '#5BE49B',
  // light: '#5BE49B',
  main: '#2A85FF',
  // dark: '#007867',
  // darker: '#004B50',
  // contrastText: '#FFFFFF',

  lighter: '#CAFDF5',
  light: '#61F3F3',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#22C55E',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: '#ffffff',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
  darkBlue: '#111315',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode) {
  const light = {
    ...base,
    mode: 'light',
    text: {
      primary: grey[1000],
      secondary: grey[650],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
      default2: grey[660],
      default3: grey[400],
      default4:grey[300],
      neutral: grey[200],
      card1: '#FFFFFF',
      footer: '#111315',
      cardButton: '#FFFFFF',
      cardPanel: '#F3F5F7',
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default: grey[900],
      default2: grey[660],
      neutral: alpha(grey[500], 0.12),
      card1: grey[970],
      footer: '#1A1D1F',
      cardButton: '#33383F',
      cardPanel: '#1D1E20',
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}
