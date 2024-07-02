import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';
import MainLogo from './mainLogo';
import Image from 'next/image';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const path = theme.palette.mode === 'light' ? '/new/main-logo.png' : '/new/main-logo-dark.svg';

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        // display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {/* <MainLogo /> */}
      <Image src={path} width={176.6} height={56} alt="logo" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }} aria-label="logo">
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
