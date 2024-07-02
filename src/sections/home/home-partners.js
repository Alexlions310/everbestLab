import { StyledEllipseTop, StyledEllipseBottomW, StyledEllipseBottom } from './home-hero';
import { partnerList, partnerListGrey } from 'public/new/client';
import Image from 'next/image';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function HomePartners() {
  const theme = useTheme();
  const lightMode = theme.palette.mode === 'light';
  const mdUp = useResponsive('up', 'md');
  return (
    <Stack>
      {mdUp && <StyledEllipseTop />}

      {mdUp && (
        <StyledEllipseBottomW>
          <Stack
            component={Container}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            overflow={'hidden'}
            spacing={{ md: 'auto', xs: 4 }}
          >
            {lightMode &&
              (mdUp ? partnerList : [partnerList[2], partnerList[3]]).map((partner, index) => (
                <Box
                  sx={{
                    zIndex: 1,
                    filter: 'grayscale(1)',
                    transition: 'filter 0.9s ease-in-out, opacity 0.9s ease-in-out',
                    opacity: '0.6',
                    '&:hover': {
                      filter: 'grayscale(0)',
                      opacity: '1',
                    },
                  }}
                >
                  <Image
                    src={partner.path}
                    alt={'logo'}
                    width={partner.width}
                    height={partner.height}
                  />
                </Box>
              ))}

            {!lightMode &&
              (mdUp ? partnerListGrey : [partnerList[2], partnerList[3]]).map((partner, index) => {
                let imgPath = partner.path;
                return (
                  <Box
                    sx={{
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={imgPath}
                      alt={'logo'}
                      width={partner.width}
                      height={partner.height}
                    />
                  </Box>
                );
              })}
          </Stack>
        </StyledEllipseBottomW>
      )}

      <StyledEllipseBottom />
    </Stack>
  );
}
