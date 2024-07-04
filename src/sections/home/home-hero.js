import { m, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useResponsive } from 'src/hooks/use-responsive';
import { HEADER } from 'src/layouts/config-layout';
import { bgBlur, bgGradient } from 'src/theme/css';
import { varFade, MotionContainer } from 'src/components/animate';
import { partnerList, partnerListGrey } from 'public/new/client';
import { useTranslate } from 'src/locales';
import Image from 'next/image';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/new/overlay.svg',
  }),
  width: '100%',
  height: '120vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  backgroundImage: 'url(/new/heroBackground.svg)',
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.H_DESKTOP_OFFSET + 40,
  },
}));

export const StyledEllipseRight = styled('div')(({ theme, right }) => ({
  top: 0,
  width: 590,
  right: right ?? -100,
  height: 340,
  position: 'absolute',
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[950],
  filter: 'blur(50px)',
  WebkitFilter: 'blur(60px)',
  zIndex: 999,
}));

export const StyledEllipseLeft = styled('div')(({ theme }) => ({
  top: -40,
  width: 450,
  left: -60,
  height: 360,
  position: 'absolute',
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[950],
  filter: 'blur(60px)',
  WebkitFilter: 'blur(60px)',
  zIndex: 999,
}));

export const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

export const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

export const StyledEllipseBottomW = styled('div')(({ theme }) => ({
  height: 440,
  bottom: -300,
  width: '100%',
  padding: '50px 0px',
  backgroundColor: theme.palette.background.default,
  position: 'absolute',
}));

export const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const [percent, setPercent] = useState(0);
  const [videoWidth, setVideoWidth] = useState('539px');
  const [videoHeight, setVideoHeight] = useState('303.2px');

  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const { t } = useTranslate();

  const lightMode = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  useEffect(() => {
    setVideoHeight('auto');
    setVideoWidth('100%');
  }, []);

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderStatistics = (
    <Stack
      ml={mdUp ? 0 : 2}
      spacing={4}
      direction="row"
      mt={mdUp ? '16%' : '20%'}
      justifyContent="center"
      sx={{
        mb: { xs: 8, md: 0 },
        pb: { xs: '80px', md: '0px' },
      }}
    >
      {[
        { num: '+70', label: t('text.successfulProjects') },
        { num: '+50', label: t('text.happyClients') },
        { num: '+20', label: t('text.experiencedEmployees') },
      ].map((icon) => (
        <m.div key={icon.num} variants={varFade().in}>
          <m.div variants={varFade().in}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'left',
                fontSize: { xs: '24px', md: '42px' },
                fontWeight: { xs: 600, md: 600 },
              }}
            >
              {icon.num}
            </Typography>
          </m.div>
          <m.div variants={varFade().in}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'left',
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: { xs: 400, md: 400 },
                lineHeight: { xs: '20.71px', md: '20.24px' },
                color: lightMode ? theme.palette.grey[650] : theme.palette.common.white,
              }}
            >
              {icon.label}
            </Typography>
          </m.div>
        </m.div>
      ))}
    </Stack>
  );

  const renderDescription = (
    <Stack
      alignItems={mdUp ? 'flex-start' : 'center'}
      justifyContent={mdUp ? 'center' : 'flex-end'}
      sx={{
        // height: 1,
        height: '90%',
        maxWidth: 580,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP}px`,
        },
      }}
    >
      <m.div variants={varFade().in}>
        <Box
          sx={{
            backgroundColor: lightMode ? '#B1E5FC' : theme.palette.common.white,
            padding: '8px 16px 8px 16px',
            borderRadius: '40px',
            marginBottom: '10px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: { xs: 400, md: 400 },
              lineHeight: { xs: '17.71px', md: '20.24px' },
              textAlign: { sm: 'center', md: 'left' },
              color: lightMode ? theme.palette.grey[900] : theme.palette.grey[100],
            }}
          >
            {t('text.notOnlyWeb') + '👨🏻‍💻'}
          </Typography>
        </Box>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '32px', md: '52px' },
            fontWeight: { xs: 500, md: 500 },
            lineHeight: { xs: '41.6px', md: '78px' },
            textAlign: 'left',
          }}
        >
          {t('title.toliq') + ' '}
          <span
            style={{
              color: lightMode ? theme.palette.grey[100] : theme.palette.common.white,
            }}
          >
            {t('title.savdo') + ' '}
          </span>
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'left',
          }}
        >
          <span
            style={{
              color: lightMode ? theme.palette.grey[100] : theme.palette.common.white,
            }}
          >
            {t('title.mexanizmi') + ' '}
          </span>
          {t('title.kerak') + ' '}
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography
          variant="body2"
          sx={{
            textAlign: mdUp ? 'left' : 'center',
            maxWidth: { xs: 320 },
            marginTop: '10px',
            fontSize: { xs: 16 },
          }}
        >
          {t('text.chempPartner')}
        </Typography>
      </m.div>

      {mdUp && renderStatistics}
    </Stack>
  );

  const renderSlides = (
    <Stack
      alignItems="flex-start"
      justifyContent={mdUp ? 'center' : 'flex-start'}
      sx={{
        height: '85%',
        mx: 'auto',
        maxWidth: mdUp ? '600px' : '400px',
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + 20 + percent * 2.5}px`,
          xs: 0,
        },
      }}
    >
      <Stack
        component={m.div}
        variants={varFade().in}
        sx={{
          position: 'relative',
          ...(!mdUp && {
            margin: '0px auto',
          }),
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            marginTop: '10%',
            border: `1.5px solid ${lightMode ? theme.palette.grey[900] : theme.palette.grey[500]}`,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: 4,
              padding: 0,
              border: `17px solid ${lightMode ? theme.palette.grey[900] : theme.palette.grey[800]}`,
            }}
          >
            <video
              width={videoWidth}
              height={videoHeight}
              autoPlay
              muted
              loop
              src="https://everbestlab.uz/wp-content/uploads/2024/02/Videe-last.mp4"
              style={{
                objectFit: 'fill',
                borderRadius: 8,
              }}
            />
          </Box>
        </Box>
      </Stack>

      {!mdUp && renderStatistics}
    </Stack>
  );

  // const renderEllipses = (
  //   <>
  //     {mdUp && <StyledEllipseTop />}

  //     {mdUp && (
  //       <StyledEllipseBottomW>
  //         <Stack
  //           component={Container}
  //           direction={'row'}
  //           justifyContent={'space-between'}
  //           alignItems={'center'}
  //           overflow={'hidden'}
  //           spacing={{ md: 'auto', xs: 4 }}
  //         >
  //           {lightMode &&
  //             (mdUp ? partnerList : [partnerList[2], partnerList[3]]).map((partner, index) => (
  //               <Box
  //                 sx={{
  //                   zIndex: 1,
  //                   filter: 'grayscale(1)',
  //                   transition: 'filter 0.9s ease-in-out, opacity 0.9s ease-in-out',
  //                   opacity: '0.6',
  //                   '&:hover': {
  //                     filter: 'grayscale(0)',
  //                     opacity: '1',
  //                   },
  //                 }}
  //               >
  //                 <Image
  //                   src={partner.path}
  //                   alt={'logo'}
  //                   width={partner.width}
  //                   height={partner.height}
  //                 />
  //               </Box>
  //             ))}

  //           {!lightMode &&
  //             (mdUp ? partnerListGrey : [partnerList[2], partnerList[3]]).map((partner, index) => {
  //               let imgPath = partner.path;
  //               return (
  //                 <Box
  //                   sx={{
  //                     zIndex: 1,
  //                   }}
  //                 >
  //                   <Image
  //                     src={imgPath}
  //                     alt={'logo'}
  //                     width={partner.width}
  //                     height={partner.height}
  //                   />
  //                 </Box>
  //               );
  //             })}
  //         </Stack>
  //       </StyledEllipseBottomW>
  //     )}

  //     <StyledEllipseBottom />
  //   </>
  // );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1, md: { pt: '12%' } }}>
            <Grid container columnSpacing={{}} sx={{ height: { md: 1, xs: '130%' } }}>
              <Grid xs={12} md={6}>
                {renderDescription}
              </Grid>

              <Grid md={6} xs={12}>
                {renderSlides}
              </Grid>
            </Grid>
          </Container>

          {/* {renderEllipses} */}
        </StyledWrapper>
      </StyledRoot>

      <Box height={{ md: '100vh' }} />
    </>
  );
}
