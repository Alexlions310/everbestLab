import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { useTranslate } from 'src/locales';

export function useSocialsData() {
  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  const data = useMemo(
    () => [
      {
        value: 'facebook',
        name: 'FaceBook',
        icon: 'eva:facebook-fill',
        color: light ? '#2A85FF' : '#FFFFFF',
        path: 'https://www.facebook.com/caitlyn.kerluke',
      },
      {
        value: 'instagram',
        name: 'Instagram',
        icon: 'ant-design:instagram-filled',
        color: light ? '#2A85FF' : '#FFFFFF',
        path: 'https://www.instagram.com/caitlyn.kerluke',
      },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: light ? '#2A85FF' : '#FFFFFF',
        path: 'https://www.linkedin.com/caitlyn.kerluke',
      },
      {
        value: 'twitter',
        name: 'Twitter',
        icon: 'eva:twitter-fill',
        color: light ? '#2A85FF' : '#FFFFFF',
        path: 'https://www.twitter.com/caitlyn.kerluke',
      },
    ],
    [light]
  );

  return data;
}

export function useTeamData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      {
        id: '1',
        name: 'Saparboy Batirov',
        line: `12 ${t('year') + ' ' + t('inIT')},`,
        line2: `+7 ${t('year') + ' ' + t('inEcommerce')}`,
        avatarUrl: '//everbestlab.uz/wp-content/uploads/2024/02/IMAGE-2024-02-13-193419.jpg',
      },
      {
        id: '2',
        name: 'Bobur Rajabov',
        line: `12 ${t('year') + ' ' + t('inBusiness')}`,
        line2: `+5 ${t('year') + ' ' + t('inIT')},`,
        avatarUrl: 'https://everbestlab.uz/wp-content/uploads/2024/02/IMAGE-2024-02-13-193433.jpg',
      },
      {
        id: '3',
        name: "Ulug'bek Ro'zimboyev",
        line: `11 ${t('year') + ' ' + t('inIT')},`,
        line2: `3 ${t('year') + ' ' + t('inEcommerce')}`,
        avatarUrl:
          'https://everbestlab.uz/wp-content/uploads/2024/02/Ulugbek-1-1-e1708690735909.jpg',
      },
      {
        id: '4',
        name: 'Xudoyor Atajanov',
        line: t('inEcommerce'),
        line2: `+4 ${t('year')}`,
        avatarUrl:
          'https://everbestlab.uz/wp-content/uploads/2024/02/IMAGE-2024-02-14-211831-e1707927559980.jpg',
      },
    ],
    [t]
  );

  return data;
}
