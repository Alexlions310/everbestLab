import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha, useTheme, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';
import { Button } from '@mui/material';
import { useTranslate } from 'src/locales';
import { StyledEllipseBottom } from './home-hero';
import { useResponsive } from 'src/hooks/use-responsive';
import { partnerList, partnerListGrey } from 'public/new/client';
import Image from 'next/image';

// ----------------------------------------------------------------------

export default function HomeWhyUs() {
  const { t } = useTranslate();
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const lightMode = theme.palette.mode === 'light';

  const CARDS = [
    {
      icon: '/new/card/solution.svg',
      title: t('weOffer.completeSolutions'),
      description: t('weOffer.completeSolutionsEx'),
    },
    {
      icon: '/new/card/audit.svg',
      title: t('weOffer.auditAndTraining'),
      description: t('weOffer.auditAndTrainingEx'),
    },
    {
      icon: '/new/card/number.svg',
      title: t('weOffer.manageWithNums'),
      description: t('weOffer.manageWithNumsEx'),
    },
    {
      icon: '/new/card/modern.svg',
      title: t('weOffer.modernInterface'),
      description: t('weOffer.modernInterfaceEx'),
    },
    {
      icon: '/new/card/support.svg',
      title: t('weOffer.support'),
      description: t('weOffer.supportEx'),
    },
    {
      icon: '/new/card/moneyReturn.svg',
      title: t('weOffer.moneyReturn'),
      description: t('weOffer.moneyReturnEx'),
    },
  ];

  const StyledEllipseBottomW = styled('div')(({ theme }) => ({
    height: 120,
    top: 0,
    left: 0,
    width: '100%',
    padding: '40px 5px',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
  }));

  // const renderEllipses = (
  //   <>
  //     {!mdUp && (
  //       <StyledEllipseBottomW>
  //         <Stack
  //           component={Container}
  //           direction={'row'}
  //           justifyContent={'space-between'}
  //           alignItems={'center'}
  //           overflow={'hidden'}
  //           spacing={{ md: 'auto', xs: 4 }}
  //           sx={{padding: '0px'}}
  //         >
  //           {lightMode &&
  //             (mdUp ? partnerList : [partnerList[2], partnerList[3]]).map((partner, index) => (
  //               <Box
  //                 sx={{
  //                   zIndex: 1,
  //                   filter: 'grayscale(1)',
  //                   transition: 'filter 0.1s ease-in-out, opacity 0.1s ease-in-out',
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
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        pt: { md: 12 },
        position: 'relative',
      }}
    >
      {/* {renderEllipses} */}
      <Stack
        spacing={1}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 8 },
          mt: { xs: 8 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h2">{t('title.whyUs')}</Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            component="div"
            variant="body2"
            sx={{ color: 'text.disabled', maxWidth: { md: 600, xs: 300 }, margin: '0 auto' }}
          >
            {t('weOffer.subTitle')}
          </Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 4 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title} whileHover={varFade()}>
            <Card
              sx={{
                width: { xs: 'auto', md: 'auto' },
                height: { xs: 'auto', md: 229 },
                overflow: 'hidden',
                textAlign: 'left',
                bgcolor: 'background.card1',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                p: (theme) => theme.spacing(10, 5),
                ...{
                  boxShadow: (theme) => ({
                    md: `40px 40px 40px 40px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[400], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                },
                '&:hover': {
                  boxShadow: (theme) => ({
                    md: `40px 40px 40px 40px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.grey[800], 0.4)
                    }`,
                  }),
                },
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{ mx: 'auto', width: 48, height: 48 }}
              />

              <Typography
                variant="h5"
                sx={{
                  mt: { xs: 2, md: 2 },
                  mb: 2,
                  fontWeight: '500',
                  color: 'text.primary',
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  display: '-webkit-box',
                  WebkitLineClamp: index === 3 ? 2 : 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: '400',
                }}
              >
                {card.description}
              </Typography>
            </Card>
          </m.div>
        ))}
      </Box>

      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            textAlign: 'center',
            mt: 5,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{ padding: '10px 20px', fontSize: '16px', fontWeight: '500' }}
            href={'#contact-us'}
            aria-label="free consulting"
          >
            {t('button.freeConsulting')}
          </Button>
        </Box>
      </m.div>
    </Container>
  );
}
