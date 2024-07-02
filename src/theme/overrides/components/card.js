// ----------------------------------------------------------------------

export function card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          boxShadow: theme.customShadows.card,
          borderRadius: theme.shape.borderRadius * 2,
          padding: '24px !important',
          transition: 'all 0.7s ease-in-out',
          zIndex: 10, // Fix Safari overflow: hidden with border radius
          '&:hover': {
            boxShadow: theme.customShadows.z16,
            borderColor: theme.palette.primary.main,
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
        },
      },
    },
  };
}
