import { useRef, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { useNavData } from './config-navigation';
import LanguagePopover from '../common/language-popover';
import { useSettingsContext } from 'src/components/settings';
import { IconButton } from '@mui/material';
import { useScroll } from 'framer-motion';
import ScrollProgress from 'src/components/scroll-progress';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const mdUp = useResponsive('up', 'md');
  const settings = useSettingsContext();
  const { t } = useTranslate();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const navConfig = useNavData();
  // For the active section
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef([]);

  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');
    sections.current = sectionElements;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  // For the active section

  return (
    <AppBar
      sx={{
        background: 'transparent',
        top: { xs: '16px', md: 0 },

        ...(offsetTop && {
          top: { md: '30px', xs: '16px' },
        }),
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          background: 'transparent',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
        }}
      >
        <Container
          sx={{
            height: mdUp ? 1 : HEADER.H_MOBILE,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: '0px !important',
            paddingRight: '0px !important',

            ...(!mdUp && {
              borderRadius: { xs: '16px' },
              maxWidth: { xs: '95%' },
              ...bgBlur({
                color: theme.palette.background.default3,
              }),
            }),

            ...(offsetTop &&
              mdUp && {
                borderRadius: '16px',
                ...bgBlur({
                  color: theme.palette.background.default4,
                }),
                height: {
                  md: HEADER.H_DESKTOP_OFFSET,
                },
              }),

            transition: theme.transitions.create(['height'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          {mdUp ? (
            offsetTop && (
              <ScrollProgress
                scrollYProgress={scrollYProgress}
                sx={{
                  height: '1.4px',
                  ml: '12.9px',
                  mr: '12.9px',
                }}
              />
            )
          ) : (
            <ScrollProgress
              scrollYProgress={scrollYProgress}
              sx={{
                height: '1.4px',
                ml: '12.9px',
                mr: '12.9px',
              }}
            />
          )}

          <Logo />

          {mdUp && <NavDesktop data={navConfig} activeSection={activeSection} />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row' }} spacing={2}>
            {mdUp && <LanguagePopover />}

            {mdUp && (
              <Button
                sx={{ padding: '10px 20px', fontSize: '16px', fontWeight: '500' }}
                variant="contained"
                color="primary"
                href={'#contact-us'}
                area-label="Free Consulting"
              >
                {t('button.freeConsulting')}
              </Button>
            )}

            {mdUp && (
              <IconButton
                area-label="Theme Mode"
                whileTap="tap"
                whileHover="hover"
                color="primary"
                onClick={() =>
                  settings.onUpdate('themeMode', settings.themeMode === 'dark' ? 'light' : 'dark')
                }
              >
                {settings.themeMode === 'dark' ? <LightMode /> : <DarkMode />}
              </IconButton>
            )}

            {!mdUp && <NavMobile data={navConfig} activeSection={activeSection}/>}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export const DarkMode = (props) => (
  <svg
    width={38}
    height={37}
    viewBox="0 0 53 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1.05176} y={0.5} width={51} height={51} rx={25.5} stroke="#2A85FF" />
    <path
      d="M36.0518 28.0784C34.8521 28.7189 33.4819 29.0821 32.0269 29.0821C27.3009 29.0821 23.4697 25.2509 23.4697 20.5249C23.4697 19.0699 23.8328 17.6997 24.4734 16.5C20.2194 17.497 17.0518 21.3151 17.0518 25.8731C17.0518 31.1899 21.3619 35.5 26.6786 35.5C31.2366 35.5 35.0548 32.3324 36.0518 28.0784Z"
      stroke="#2A85FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LightMode = (props) => (
  <svg
    width={38}
    height={37}
    viewBox="0 0 53 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1.05176} y={0.5} width={51} height={51} rx={25.5} fill="#2A85FF" />
    <rect x={1.05176} y={0.5} width={51} height={51} rx={25.5} stroke="#2A85FF" />
    <path
      d="M31.5518 26C31.5518 28.7614 29.3132 31 26.5518 31C23.7903 31 21.5518 28.7614 21.5518 26C21.5518 23.2386 23.7903 21 26.5518 21C29.3132 21 31.5518 23.2386 31.5518 26Z"
      stroke="white"
      strokeWidth={1.5}
    />
    <path
      d="M26.5473 17H26.5562M26.5479 35H26.5568M32.9106 19.636H32.9195M20.1858 32.364H20.1948M20.1858 19.6365H20.1948M32.91 32.3645H32.9189M35.5428 26.0006H35.5518M17.5518 26.0006H17.5607"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
