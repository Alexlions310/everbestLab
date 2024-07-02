import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Footer from './footer';
import Header from './header';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1, scrollBehavior: 'smooth' }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          scrollBehavior: 'smooth',
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
