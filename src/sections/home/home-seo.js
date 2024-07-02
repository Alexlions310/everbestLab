import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { fPercent } from 'src/utils/format-number';
import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import { Link } from '@mui/material';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export default function HomeSeo() {
  const theme = useTheme();
  const { t } = useTranslate();
  const lightMode = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  const SKILLS = [...Array(3)].map((_, index) => ({
    label: [t('performance'), t('seo'), t('bestPractices')][index],
    value: [90, 95, 85][index],
  }));

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid
        container
        columnSpacing={{ md: 1 }}
        alignItems="flex-start"
        justifyContent={'space-between'}
      >
        <Grid
          container
          xs={12}
          md={6}
          lg={7}
          alignItems="center"
          sx={{ pr: { md: 1 }, pt: { md: 1 } }}
        >
          <Grid xs={12}>
            <m.div variants={varFade().inUp}>
              <Image
                maxHeight={381}
                maxWidth={610}
                alt="our office 2"
                src="/new/home-seo.svg"
                sx={{ borderRadius: '16px', boxShadow: shadow, objectFit: 'cover' }}
              />
            </m.div>
          </Grid>
        </Grid>

        <Grid xs={12} md={5} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              {t('title.seoPlace')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
            >
              {t('text.moreInfo')}
              <Link aria-label={'mailto:info@everbestlab.uz'} href={'mailto:info@everbestlab.uz'}>
                info@everbestlab.uz
              </Link>
              {t('text.moreInfo1')}
            </Typography>
          </m.div>

          <Stack spacing={2} sx={{ my: 5 }}>
            {SKILLS.map((progress, index) => (
              <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {progress.label}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fPercent(progress.value)}
                  </Typography>
                </Stack>

                <LinearProgress
                  color={(index === 0 && 'primary') || (index === 1 && 'success') || 'warning'}
                  variant="determinate"
                  value={progress.value}
                />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
