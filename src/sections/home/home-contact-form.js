import { m } from 'framer-motion';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { varFade, MotionViewport } from 'src/components/animate';
import Container from '@mui/material/Container';
import { useCallback, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Checkbox, Link } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTranslate } from 'src/locales';
import { fontWeight } from '@mui/system';

// ----------------------------------------------------------------------

export default function HomeContactForm() {
  const { t } = useTranslate();
  const [currentTab, setCurrentTab] = useState(1);
  const theme = useTheme();
  const [accepted, setAccepted] = useState(true);
  const mdUp = useResponsive('up', 'md');
  const [clicked, setClicked] = useState(1);

  const lightMode = theme.palette.mode === 'light';

  const contactMethods = [
    { name: t('button.phoneNum'), val: 1 },
    { name: t('button.email'), val: 2 },
    { name: t('button.telegram'), val: 3 },
  ];

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Container sx={{ py: { md: 5, xs: 2 }, mb: { md: 4 }, pt: { md: 16 } }}>
      <Stack
        component={MotionViewport}
        direction={mdUp ? 'row' : 'column'}
        justifyContent={mdUp ? 'space-between' : 'flex-start'}
        spacing={!mdUp && 5}
      >
        <Stack direction={'column'} spacing={2}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ mb: { xs: 1, md: 1 }, maxWidth: { xs: 320, md: 570 } }}>
              {t('title.moreInfo')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                color: lightMode ? 'text.secondary' : 'common.white',
                maxWidth: { xs: 320, md: 440 },
              }}
            >
              {t('text.moreInfo')}
              <Link
                aria-label={'mailto:bobur@everbestlab.com'}
                href={'mailto: bobur@everbestlab.com'}
              >
                bobur@everbestlab.com
              </Link>
              {t('text.moreInfo1')}
            </Typography>
          </m.div>
        </Stack>

        <Stack alignItems="flex-start" justifyContent={'center'} spacing={2}>
          <Tabs
            TabIndicatorProps={{
              style: {
                display: 'none',
              },
            }}
            value={currentTab}
            onChange={handleChangeTab}
            variant="standart"
            sx={{
              background: theme.palette.background.cardPanel,
              padding: '4px',
              borderRadius: '12px',
              width: { xs: '100%' },
            }}
          >
            {contactMethods.map((tab) => (
              <Tab
                key={tab.val}
                value={tab.val}
                label={tab.name}
                onClick={() => {
                  setClicked(tab.val);
                }}
                sx={{
                  transition: 'all 0.4s ease',
                  background:
                    currentTab === tab.val ? theme.palette.background.cardButton : 'transparent',
                  color: theme.palette.text.primary,
                  borderRadius: '10px',
                  paddingX: { md: '12px', xs: '10px' },
                  width: { xs: '100px', md: '143px' },
                  marginX: '4px !important',
                }}
              />
            ))}
          </Tabs>

          {clicked === 1 && (
            <m.div style={{ width: '100%', marginRight: '2px' }}>
              <TextField
                required
                type="number"
                variant="filled"
                fullWidth
                label={t('form.phone')}
              />
            </m.div>
          )}
          {clicked === 2 && (
            <m.div style={{ width: '100%', marginRight: '2px' }}>
              <TextField required type="email" variant="filled" fullWidth label={t('form.email')} />
            </m.div>
          )}
          {clicked === 3 && (
            <m.div style={{ width: '100%', marginRight: '2px' }}>
              <TextField
                required
                type="email"
                variant="filled"
                fullWidth
                label={t('form.telegram')}
              />
            </m.div>
          )}
          <m.div variants={varFade().inUp} style={{ width: '100%', marginRight: '2px' }}>
            <TextField variant="filled" fullWidth label={t('form.name')} />
          </m.div>

          <m.div variants={varFade().inUp} style={{ width: '100%', marginRight: '2px' }}>
            <TextField variant="filled" fullWidth label={t('form.company')} />
          </m.div>

          {/* <m.div variants={varFade().inUp}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-start'}>
              <Checkbox
                size="medium"
                defaultChecked
                value={accepted}
                onChange={() => setAccepted(!accepted)}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t('button.isAgree')}
                <Link aria-label={'mailto:info@everbestlab.uz'} href={'mailto:info@everbestlab.uz'}>
                  {' '}
                  {t('button.isAgree1')}
                </Link>
                {t('button.isAgree2')}
              </Typography>
            </Stack>
          </m.div> */}

          <m.div variants={varFade().inUp}>
            <Button
              aria-label="Send message"
              color="primary"
              size="large"
              variant="contained"
              // disabled={!accepted}
            >
              {t('form.send')}
            </Button>
          </m.div>
        </Stack>
      </Stack>
    </Container>
  );
}
