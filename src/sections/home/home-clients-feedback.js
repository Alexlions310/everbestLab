import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { useResponsive } from 'src/hooks/use-responsive';
import { varFade, MotionViewport } from 'src/components/animate';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { useTranslate } from 'src/locales';
import { useMemo } from 'react';
import HomePartners from './home-partners';
// ----------------------------------------------------------------------
export const StyledBlurLeft = styled('div')(({ theme }) => ({
  top: -40,
  width: 450,
  left: -60,
  height: 360,
  position: 'absolute',
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[950],
  filter: 'blur(150px)',
  WebkitFilter: 'blur(150px)',
  zIndex: 999,
}));

export const StyledBlurRight = styled('div')(({ theme, right }) => ({
  top: 0,
  width: 590,
  right: right ?? -100,
  height: 340,
  position: 'absolute',
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[950],
  filter: 'blur(150px)',
  WebkitFilter: 'blur(150px)',
  zIndex: 999,
}));

export default function HomeClientsFeedback() {
  const theme = useTheme();
  const { t } = useTranslate();

  const CARDS = useMemo(
    () => [
      {
        postedDate: t('feedBack2.company'),
        name: t('feedBack2.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack2.text'),
        imgUrl: '/new/women.png',
      },
      {
        postedDate: t('feedBack.company'),
        name: t('feedBack.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack.text'),
        imgUrl: '/new/mfactor.svg',
      },
      {
        postedDate: t('feedBack3.company'),
        name: t('feedBack3.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack3.text'),
        imgUrl: '/new/anorHome.jpg',
      },
      {
        postedDate: t('feedBack4.company'),
        name: t('feedBack4.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack4.text'),
        imgUrl: '/new/maruf.png',
      },
    ],
    [t]
  );

  const CARDS2 = useMemo(
    () => [
      {
        postedDate: t('feedBack2.company'),
        name: t('feedBack2.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack2.text'),
        imgUrl: '/new/women.png',
      },
      {
        postedDate: t('feedBack5.company'),
        name: t('feedBack5.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack5.text'),
        imgUrl: '/new/jasur.svg',
      },
      {
        postedDate: t('feedBack4.company'),
        name: t('feedBack4.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack4.text'),
        imgUrl: '/new/maruf.png',
      },
      {
        postedDate: t('feedBack.company'),
        name: t('feedBack.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack.text'),
        imgUrl: '/new/mfactor.svg',
      },
      {
        postedDate: t('feedBack3.company'),
        name: t('feedBack3.owner'),
        icon: '/new/quote.svg',
        title: 'To’liq yechimlar',
        description: t('feedBack3.text'),
        imgUrl: '/new/anorHome.jpg',
      },
    ],
    [t]
  );

  const light = theme.palette.mode === 'light';
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      maxWidth={false}
      component={MotionViewport}
      sx={{
        pb: { xs: 6, md: 10 },
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={1}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 8 },
        }}
      >
        {/* <m.div
          variants={varFade().inUp}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
          <Typography
            component="div"
            variant="body2"
            sx={{
              color: 'text.disabled',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              border: (theme) => `solid 1px ${theme.palette.divider}`,
              borderRadius: '48px',
              paddingRight: '10px',
              fontSize: { xs: '0.755rem', md: '0.875rem' },
            }}
          >
            <Star />
            {t('text.feedback30')}
          </Typography>
        </m.div> */}

        <m.div variants={varFade().inUp}>
          <Typography variant="h2">{t('title.clientsFeedback')}</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            component="div"
            variant="body2"
            sx={{ color: 'text.disabled', maxWidth: { md: 600, xs: 300 }, margin: '0 auto' }}
          >
            {t('weOffer.feedBackInfo')}
          </Typography>
        </m.div>
      </Stack>

      <Stack
        gap={{ xs: 2, md: 2 }}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection={'row'}
        overflow="visible"
        position="relative"
        sx={{
          transform: { md: 'translateX(-60px)', xs: 'translateX(-30px)' },
          maxHeight: { md: 250, xs: 250 },
          maxWidth: { md: '1400px', xs: '300px' },
          margin: '0 auto',
          mb: { xs: 0 },
        }}
      >
        {mdUp && <StyledBlurLeft />}
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inLeft} key={card.title}>
            <Card
              sx={{
                minHeight: { md: 250, xs: 160 },
                minWidth: { md: '400px', xs: '250px' },
                textAlign: 'left',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column',
                padding: { xs: '1rem !important' },
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                bgcolor: light ? theme.palette.grey[250] : theme.palette.grey[950],
                p: (theme) => theme.spacing(10, 5),
                ...{
                  boxShadow: (theme) => ({
                    md: `40px 40px 40px 40px ${
                      light
                        ? alpha(theme.palette.grey[300], 0.16)
                        : alpha(theme.palette.grey[900], 0.4)
                    }`,
                  }),
                },
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{
                  width: { md: 19, xs: 10 },
                  height: { md: 15, xs: 8 },
                }}
              />

              <Typography
                sx={{
                  color: 'text.secondary',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: { md: '1rem', xs: '0.705rem' },
                }}
              >
                {card.description}
              </Typography>

              <Stack direction="row" alignItems={'center'}>
                <Avatar alt={card.name} src={card.imgUrl} sx={{ mr: { md: 2, xs: 1 } }} />

                <ListItemText
                  primary={card.name}
                  secondary={card.postedDate}
                  primaryTypographyProps={{
                    typography: 'subtitle2',
                    mb: { md: 0.5, xs: 0.2 },
                    fontSize: { md: '0.875rem', xs: '0.745rem' },
                  }}
                  secondaryTypographyProps={{
                    typography: 'caption',
                    color: 'inherit',
                    sx: { opacity: 0.64 },
                    fontSize: { md: '0.75rem', xs: '0.705rem' },
                  }}
                />
              </Stack>
            </Card>
          </m.div>
        ))}
        {mdUp && <StyledBlurRight right={-360} />}
      </Stack>

      <Stack
        gap={{ xs: 2, lg: 2 }}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection={'row'}
        overflow="visible"
        pr={'200px'}
        sx={{
          mt: { xs: 2, md: 2 },
          transform: { md: 'translateX(-320px)', xs: 'translateX(-920px)' },
          maxHeight: { md: 250, xs: 150 },
          maxWidth: { md: '1300px', xs: '600px' },
          margin: '0 auto',
        }}
      >
        {mdUp && <StyledBlurLeft />}
        {CARDS2.map((card, index) => (
          <m.div variants={varFade().inLeft} key={card.title}>
            <Card
              sx={{
                minHeight: { md: 250, xs: 160 },
                minWidth: { md: '400px', xs: '250px' },
                textAlign: 'left',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column',
                padding: { xs: '1rem !important' },
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                bgcolor: light ? theme.palette.grey[250] : theme.palette.grey[950],
                p: (theme) => theme.spacing(10, 5),
                ...{
                  boxShadow: (theme) => ({
                    md: `40px 40px 40px 40px ${
                      light
                        ? alpha(theme.palette.grey[300], 0.16)
                        : alpha(theme.palette.grey[900], 0.4)
                    }`,
                  }),
                },
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{
                  width: { md: 19, xs: 10 },
                  height: { md: 15, xs: 8 },
                }}
              />

              <Typography
                sx={{
                  color: 'text.secondary',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: { md: '1rem', xs: '0.705rem' },
                }}
              >
                {card.description}
              </Typography>

              <Stack direction="row" alignItems={'center'}>
                <Avatar alt={card.name} src={card.imgUrl} sx={{ mr: 2 }} />

                <ListItemText
                  primary={card.name}
                  secondary={card.postedDate}
                  primaryTypographyProps={{
                    typography: 'subtitle2',
                    mb: { md: 0.5, xs: 0.2 },
                    fontSize: { md: '0.875rem', xs: '0.745rem' },
                  }}
                  secondaryTypographyProps={{
                    typography: 'caption',
                    color: 'inherit',
                    sx: { opacity: 0.64 },
                    fontSize: { md: '0.75rem', xs: '0.705rem' },
                  }}
                />
              </Stack>
            </Card>
          </m.div>
        ))}
        {mdUp && <StyledBlurRight right={-480} />}
      </Stack>
      <Stack>
        <HomePartners />
      </Stack>
    </Container>
  );
}

export const Star = (props) => (
  <svg
    width={33}
    height={32}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.5} width={32} height={32} rx={16} fill="#2A85FF" />
    <path
      d="M16.4974 8.83337C17.1969 8.83337 17.7479 9.36173 18.0997 10.0747L19.2744 12.4435C19.31 12.5168 19.3944 12.62 19.5214 12.7145C19.6482 12.8088 19.7724 12.8608 19.8541 12.8746L21.9805 13.2308C22.7486 13.3599 23.3924 13.7364 23.6014 14.392C23.8102 15.047 23.5042 15.7278 22.9519 16.2811L22.9514 16.2817L21.2994 17.9473C21.2339 18.0133 21.1606 18.1377 21.1146 18.2997C21.0689 18.4606 21.0649 18.6072 21.0856 18.7019L21.0859 18.7032L21.5585 20.7636C21.7545 21.6212 21.6896 22.4716 21.0847 22.9162C20.4778 23.3623 19.6485 23.1645 18.895 22.7158L16.9017 21.5261C16.818 21.476 16.6742 21.4355 16.5007 21.4355C16.3285 21.4355 16.1817 21.4755 16.0926 21.5274L16.0913 21.5281L14.1019 22.7155C13.3494 23.1658 12.521 23.36 11.9141 22.9135C11.3097 22.4689 11.2414 21.6201 11.4381 20.7632L11.9106 18.7032L11.9109 18.7019C11.9316 18.6072 11.9276 18.4606 11.8819 18.2997C11.8359 18.1377 11.7625 18.0133 11.6971 17.9473L10.0439 16.2805C9.4951 15.7271 9.19014 15.047 9.3973 14.3929C9.60506 13.7369 10.2476 13.3599 11.0162 13.2307L13.1409 12.8748L13.1416 12.8747C13.2194 12.8612 13.3418 12.8097 13.4683 12.7152C13.5951 12.6204 13.6797 12.5169 13.7154 12.4435L13.7172 12.4398L14.8904 10.074L14.8909 10.0731C15.246 9.36076 15.7987 8.83337 16.4974 8.83337Z"
      fill="white"
    />
  </svg>
);
