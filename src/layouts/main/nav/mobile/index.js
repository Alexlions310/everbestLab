import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';

import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import Scrollbar from 'src/components/scrollbar';

import NavList from './nav-list';
import { Box, Button, Stack, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useSettingsContext } from 'src/components/settings';
import { useTheme } from '@mui/material/styles';
import { useLocales, useTranslate } from 'src/locales';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 67,
  height: 40,
  padding: 5,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(-5px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 39,
    height: 39,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 30 / 2,
  },
}));

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname = usePathname();
  const theme = useTheme();
  const { onChangeLang } = useTranslate();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const settings = useSettingsContext();
  const light = settings.themeMode === 'light';

  return (
    <>
      <IconButton onClick={handleOpenMenu} sx={{ mr: 2 }}>
        <SvgColor src="/new/plus.svg" />
      </IconButton>

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            pb: 5,
            width: '100%',
          },
        }}
      >
        <Scrollbar height={'100%'}>
          <Stack
            direction={'column'}
            height={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack
              direction={'row'}
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Logo sx={{ mx: 2.5, my: 3 }} />
              <IconButton onClick={handleCloseMenu} sx={{ mr: 2 }} size="30">
                <SvgColor src="/new/cancel.svg" />
              </IconButton>
            </Stack>

            <Box>
              {data.map((list) => (
                <NavList key={list.title} data={list} handleCloseMenu={handleCloseMenu} />
              ))}
            </Box>

            <Stack direction={'column'} alignItems={'center'}>
              <MaterialUISwitch
                onClick={() => settings.onUpdate('themeMode', !light ? 'light' : 'dark')}
                sx={{ m: 1 }}
                checked={light}
              />

              <Stack direction={'row'} alignItems={'center'}>
                <Button aria-label="Uzbek" onClick={() => onChangeLang('uz')}>
                  <Typography
                    variant="body1"
                    p={'4px 16px'}
                    borderRadius={'40px'}
                    backgroundColor={
                      !light ? theme.palette.common.white : theme.palette.common.black
                    }
                    color={light ? theme.palette.common.white : theme.palette.common.black}
                  >
                    UZ
                  </Typography>
                </Button>
                <Button aria-label="Russian" onClick={() => onChangeLang('ru')}>
                  <Typography
                    variant="body1"
                    p={'4px 16px'}
                    borderRadius={'40px'}
                    color={!light ? theme.palette.common.white : theme.palette.common.black}
                    backgroundColor={
                      light ? theme.palette.common.white : theme.palette.common.black
                    }
                  >
                    RU
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
