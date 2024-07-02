import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { Typography } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export default function HomeHesitation() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const { t } = useTranslate();

  const renderDescription = (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
        paddingY: { xs: '32px' },
      }}
      id="whyUs"
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 5, typography: 'h2' }}
      >
        {t('title.whichTarif')}
      </Box>

      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 2, typography: 'body1', maxWidth: { xs: 300, md: 540 } }}
      >
        {t('text.leaveNum')}
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
        sx={{
          width: { xs: '90%', md: 'auto' },
          margin: { xs: '0 auto' },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            href={'/'}
            fullWidth={!mdUp}
            aria-label="send form"
          >
            <Typography>{t('button.send')}</Typography>
          </Button>
        </m.div>
      </Stack>
    </Box>
  );

  const renderImg = (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center" mr={2}>
      <Box
        component={m.img}
        // animate={{
        //   y: [-20, 0, -20],
        // }}
        // transition={{ duration: 4, repeat: Infinity }}
        alt="rocket"
        src="/new/hesitent.svg"
        sx={{ maxWidth: 460, paddingTop: 2 }}
      />
    </Stack>
  );

  return (
    <Container component={MotionViewport} sx={{ pt: 6 }}>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.common.darkBlue,
            endColor: theme.palette.common.black,
          }),
          borderRadius: '24px',
          px: { xs: 2, md: 10 },
        }}
      >
        {renderDescription}
        <m.div variants={varFade().inRight}>{renderImg}</m.div>
      </Stack>
    </Container>
  );
}
