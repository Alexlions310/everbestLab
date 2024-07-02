import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { useResponsive } from 'src/hooks/use-responsive';

import { varFade, MotionViewport } from 'src/components/animate';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export default function HomePricing() {
  const mdUp = useResponsive('up', 'md');
  const { t } = useTranslate();
  const theme = useTheme();

  const _homePlans = [...Array(3)].map((_, index) => ({
    license: ['Start', 'Pro', 'Enterprise'][index],
    price: ['$ 2490', '$ 5490', '$ 15490+'][index],
    include: [
      [
        t('tarifInfo.standartDesign'),
        t('tarifInfo.orderManagent'),
        t('tarifInfo.payment'),
        t('tarifInfo.lang'),
        t('tarifInfo.sms'),
        t('tarifInfo.simpleSEO'),
      ],
      [
        t('tarifInfo.productDesign'),
        t('tarifInfo.orderManagent'),
        t('tarifInfo.payment'),
        t('tarifInfo.lang'),
        t('tarifInfo.sms'),
        t('tarifInfo.sklad'),
        t('tarifInfo.mainSEO'),
      ],
      [
        t('tarifInfo.allProFeat'),
        t('tarifInfo.uxAndUi'),
        t('tarifInfo.paymentVisa'),
        t('tarifInfo.delivery'),
        t('tarifInfo.telegram'),
        t('tarifInfo.analytics'),
        t('tarifInfo.mobileApp'),
        t('tarifInfo.fullSEO'),
      ],
    ][index],
  }));

  const [currentTab, setCurrentTab] = useState('Pro');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const renderDescription = (
    <Stack spacing={2} sx={{ mb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2">{t('title.ourTarifs')}</Typography>
      </m.div>

      {/* <m.div variants={varFade().inUp}>
        <Typography
          sx={{ color: 'text.secondary', maxWidth: { md: 600, xs: 300 }, margin: '0 auto' }}
        >
          {t('weOffer.subTitle')}
        </Typography>
      </m.div> */}
    </Stack>
  );

  const renderContent = (
    <>
      {mdUp ? (
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} spacing={2}>
          {_homePlans.map((plan) => (
            <m.div key={plan.license} variants={varFade().inUp}>
              <PlanCard key={plan.license} theme={theme} plan={plan} />
            </m.div>
          ))}
        </Box>
      ) : (
        <>
          <Stack alignItems="center" sx={{ mb: 5 }}>
            <Tabs value={currentTab} onChange={handleChangeTab}>
              {_homePlans.map((tab) => (
                <Tab key={tab.license} value={tab.license} label={tab.license} />
              ))}
            </Tabs>
          </Stack>

          <Box>
            {_homePlans.map(
              (tab) =>
                tab.license === currentTab && (
                  <PlanCard
                    theme={theme}
                    key={tab.license}
                    plan={tab}
                    sx={{
                      borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
                    }}
                  />
                )
            )}
          </Box>
        </>
      )}
    </>
  );

  return (
    <Box
      sx={{
        py: { xs: 10, md: 13 },
        bgcolor: theme.palette.mode === 'light' ? theme.palette.grey[250] : theme.palette.grey[950],
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}

        {renderContent}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function PlanCard({ plan, sx, theme, ...other }) {
  const { license, include, price } = plan;
  const mdUp = useResponsive('up', 'md');
  const { t } = useTranslate();
  const plusLicense = license === 'Pro';
  const light = theme.palette.mode === 'light';

  return (
    <Stack
      position={'relative'}
      spacing={5}
      sx={{
        p: 5,
        pt: 5,
        height: { md: 580, sm: 'auto' },
        border: (theme) => `1px solid ${theme.palette.background.cardButton}`,
        bgcolor: light ? theme.palette.common.white : theme.palette.grey[960],

        ...bgGradient(
          light
            ? {
                direction: '135deg',
                startColor: theme.palette.common.white,
                endColor: theme.palette.common.white,
              }
            : {
                direction: '135deg',
                startColor: theme.palette.common.darkBlue,
                endColor: theme.palette.common.black,
              }
        ),

        borderRadius: '24px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
        },
        ...(plusLicense && {
          borderLeft: (theme) => `1px solid ${theme.palette.background.cardButton}`,
          borderRight: (theme) => `1px solid ${theme.palette.background.cardButton}`,
          color: light ? theme.palette.common.white : theme.palette.grey[960],
          ...sx,
          ...bgGradient(
            light
              ? {
                  direction: '135deg',
                  startColor: theme.palette.common.darkBlue,
                  endColor: theme.palette.common.black,
                }
              : {
                  direction: '135deg',
                  startColor: theme.palette.common.white,
                  endColor: theme.palette.common.white,
                }
          ),
          borderRadius: '24px',
        }),
      }}
      {...other}
    >
      <Stack
        spacing={2}
        sx={{
          flexDirection: { xs: 'row', md: 'column' },
          justifyContent: { xs: 'space-between', md: 'center' },
          alignItems: { xs: 'center', md: 'center' },
        }}
      >
        {plusLicense && (
          <Stack
            direction="row"
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'4px'}
            borderRadius={'40px'}
            bgcolor={theme.palette.primary.main}
            position="absolute"
            top={-20}
            left={'35%'}
          >
            <Lightning />
            <Typography
              variant="overline"
              component="div"
              px={1}
              sx={{
                color: 'white',
              }}
            >
              {t('common')}
            </Typography>
          </Stack>
        )}

        <Box sx={{ position: 'relative' }}>
          <Typography variant="h4" textAlign={'center'}>
            {license}
          </Typography>
        </Box>

        <Box display={'flex'} justifyContent={'center'}>
          <Typography
            fontSize={'18px'}
            fontWeight={550}
            variant="body1"
            textAlign={'center'}
            color={plusLicense ? 'white' : 'primary'}
            sx={{
              ...(plusLicense && {
                backgroundColor: theme.palette.primary.main,
                borderRadius: '40px',
                padding: '4px 8px',
              }),
            }}
          >
            {price}
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={2.2}>
        {include.map((option) => (
          <Stack key={option} spacing={1} direction="row" alignItems="center">
            <Checked />
            <Typography variant="body2">{option}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack alignItems="center" mt={'auto'}>
        <Button
          color="primary"
          target="_blank"
          variant={plusLicense ? 'contained' : 'outlined'}
          href={'/'}
          fullWidth={!mdUp}
          aria-label="send form"
        >
          <Typography sx={{ color: 'inherit', px: '17px', py: '3px' }}>
            {t('button.select')}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.object,
  sx: PropTypes.object,
};

export const Checked = (props) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.04175 10.5C1.04175 15.4475 5.05253 19.4583 10.0001 19.4583C14.9476 19.4583 18.9584 15.4475 18.9584 10.5C18.9584 5.55244 14.9476 1.54166 10.0001 1.54166C5.05253 1.54166 1.04175 5.55244 1.04175 10.5ZM13.8965 7.3857C14.2358 7.69669 14.2587 8.22383 13.9477 8.5631L9.36438 13.5631C9.21079 13.7306 8.99543 13.8282 8.76818 13.8331C8.54094 13.8381 8.32155 13.75 8.16083 13.5892L6.07749 11.5059C5.75206 11.1805 5.75206 10.6528 6.07749 10.3274C6.40293 10.002 6.93057 10.002 7.256 10.3274L8.72391 11.7953L12.7191 7.43689C13.0301 7.09763 13.5573 7.07471 13.8965 7.3857Z"
      fill="#2A85FF"
    />
  </svg>
);

export const Lightning = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={24} height={24} rx={12} fill="white" />
    <path
      d="M7.484 11.5529L12.1495 5.56432C12.5144 5.09596 13.1983 5.38747 13.1983 6.01136V10.6466C13.1983 11.0203 13.4665 11.3233 13.7974 11.3233H16.0666C16.5821 11.3233 16.8569 12.0099 16.5163 12.447L11.8508 18.4356C11.4859 18.904 10.802 18.6125 10.802 17.9886V13.3534C10.802 12.9796 10.5338 12.6767 10.203 12.6767H7.93373C7.41824 12.6767 7.14345 11.9901 7.484 11.5529Z"
      fill="#2A85FF"
    />
    <path
      d="M12.1495 5.56432L12.7411 6.02525V6.02525L12.1495 5.56432ZM7.484 11.5529L8.07565 12.0139H8.07565L7.484 11.5529ZM11.8508 18.4356L11.2592 17.9747H11.2592L11.8508 18.4356ZM16.5163 12.447L17.108 12.9079H17.108L16.5163 12.447ZM11.5579 5.10339L6.89236 11.092L8.07565 12.0139L12.7411 6.02525L11.5579 5.10339ZM7.93373 13.4267H10.203V11.9267H7.93373V13.4267ZM10.052 13.3534V17.9886H11.552V13.3534H10.052ZM12.4425 18.8966L17.108 12.9079L15.9247 11.9861L11.2592 17.9747L12.4425 18.8966ZM16.0666 10.5733H13.7974V12.0733H16.0666V10.5733ZM13.9483 10.6466V6.01136H12.4483V10.6466H13.9483ZM13.7974 10.5733C13.8709 10.5733 13.9182 10.6087 13.9353 10.628C13.9512 10.6458 13.9483 10.6546 13.9483 10.6466H12.4483C12.4483 11.346 12.969 12.0733 13.7974 12.0733V10.5733ZM17.108 12.9079C17.4623 12.4531 17.4856 11.8844 17.3088 11.4426C17.1318 11.0002 16.6987 10.5733 16.0666 10.5733V12.0733C16.0467 12.0733 16.0237 12.0698 16.0005 12.0617C15.9778 12.0537 15.9595 12.043 15.9461 12.0328C15.933 12.0227 15.9253 12.0137 15.9213 12.0083C15.9174 12.003 15.9162 12 15.9162 11.9999C15.9161 11.9998 15.9165 12.0008 15.9167 12.0023C15.9169 12.0038 15.9168 12.0044 15.9169 12.0037C15.9172 12.0008 15.9193 11.993 15.9247 11.9861L17.108 12.9079ZM10.052 17.9886C10.052 18.5903 10.3926 19.0973 10.8955 19.3117C11.415 19.5331 12.0443 19.4077 12.4425 18.8966L11.2592 17.9747C11.2645 17.9679 11.2943 17.9377 11.3515 17.9234C11.4046 17.9102 11.4516 17.9181 11.4837 17.9318C11.5534 17.9615 11.552 18.0108 11.552 17.9886H10.052ZM10.203 13.4267C10.1295 13.4267 10.0821 13.3913 10.065 13.372C10.0492 13.3541 10.052 13.3453 10.052 13.3534H11.552C11.552 12.6539 11.0313 11.9267 10.203 11.9267V13.4267ZM6.89236 11.092C6.53801 11.5468 6.51471 12.1156 6.69154 12.5574C6.86858 12.9997 7.30159 13.4267 7.93373 13.4267V11.9267C7.95365 11.9267 7.97659 11.9302 7.99979 11.9383C8.02257 11.9462 8.04082 11.9569 8.05423 11.9672C8.06733 11.9772 8.07505 11.9862 8.07902 11.9916C8.08295 11.997 8.08413 12 8.08416 12.0001C8.0842 12.0002 8.08384 11.9992 8.08362 11.9976C8.08342 11.9961 8.08355 11.9956 8.08347 11.9963C8.08315 11.9991 8.08101 12.007 8.07565 12.0139L6.89236 11.092ZM12.7411 6.02525C12.7358 6.03209 12.706 6.06228 12.6488 6.07656C12.5958 6.08978 12.5487 6.08186 12.5167 6.06819C12.4469 6.03847 12.4483 5.98915 12.4483 6.01136H13.9483C13.9483 5.40969 13.6077 4.90267 13.1048 4.68831C12.5853 4.46686 11.9561 4.59226 11.5579 5.10339L12.7411 6.02525Z"
      fill="#2A85FF"
    />
  </svg>
);
