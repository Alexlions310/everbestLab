import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { useTranslate } from 'src/locales';

export function useSocialsData() {
  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  const data = useMemo(
    () => [
      // {
      //   value: 'facebook',
      //   name: 'FaceBook',
      //   icon: 'eva:facebook-fill',
      //   color: light ? '#2A85FF' : '#FFFFFF',
      //   path: 'https://www.facebook.com/caitlyn.kerluke',
      // },
      // {
      //   value: 'instagram',
      //   name: 'Instagram',
      //   icon: 'ant-design:instagram-filled',
      //   color: light ? '#2A85FF' : '#FFFFFF',
      //   path: 'https://www.instagram.com/caitlyn.kerluke',
      // },
      {
        value: 'linkedin',
        name: 'Linkedin',
        icon: 'eva:linkedin-fill',
        color: light ? '#2A85FF' : '#FFFFFF',
        path: 'https://www.linkedin.com/caitlyn.kerluke',
      },
      // {
      //   value: 'twitter',
      //   name: 'Twitter',
      //   icon: 'eva:twitter-fill',
      //   color: light ? '#2A85FF' : '#FFFFFF',
      //   path: 'https://www.twitter.com/caitlyn.kerluke',
      // },
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
        avatarUrl: 'new/team/saparboy.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/sbotirov/',
      },
      {
        id: '2',
        name: 'Bobur Rajabov',
        line: `12 ${t('year') + ' ' + t('inBusiness')}`,
        line2: `+5 ${t('year') + ' ' + t('inIT')},`,
        avatarUrl: 'new/team/teacher.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/bobur-rajabov-32655146/',
      },
      {
        id: '3',
        name: 'Natalya Verbitskaya',
        line: `10 ${t('year')}` + ' ' + `${t('inRetail')}`,
        line2: `+3 ${t('year')}` + ' ' + `${t('e-kom')}`,
        avatarUrl: 'new/team/natalya.png',
        linkedInUrl: 'https://www.linkedin.com/company/everbestlab/mycompany/',
      },
      {
        id: '4',
        name: "Ulug'bek Ro'zimboyev",
        line: `11 ${t('year') + ' ' + t('inIT')},`,
        line2: `3 ${t('year') + ' ' + t('inEcommerce')}`,
        avatarUrl: 'new/team/ulugbek.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/ulug-bek-komilovich-7a2a1482/',
      },
      {
        id: '5',
        name: 'Shaxyora Erkinova',
        line: `8 ${t('year')}` + ' ' + `${t('inBusiness')}`,
        line2: `+3 ${t('year')}` + ' ' + `${t('inEcommerce')}`,
        avatarUrl: 'new/team/shaxyora.png',
        linkedInUrl: 'https://www.linkedin.com/company/everbestlab/mycompany/',
      },
      {
        id: '6',
        name: 'Navruz Ahmedov',
        line: `11 ${t('year')}` + ' ' + `${t('inIT')}`,
        line2: `6 ${t('year')}` + ' ' + `${t('global-company')}`,
        avatarUrl: 'new/team/navruz.png',
        linkedInUrl: 'https://www.linkedin.com/in/navruzbek-akhmedov-6ba6b7a8/',
      },
      {
        id: '7',
        name: 'Xudoyor Atajanov',
        line: t('inEcommerce'),
        line2: `+4 ${t('year')}`,
        avatarUrl: 'new/team/xudayor.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/xudoyor-atajanov-a3155b1b7/',
      },
      {
        id: '8',
        name: 'Erkinov Davlatyor',
        line: `+3 ${t('year') + ' ' + t('inIT')},`,
        line2: `+1 ${t('year') + ' ' + t('inEcommerce')}`,
        avatarUrl: 'new/team/davlatyor.jpeg',
        linkedInUrl: 'https://www.linkedin.com/in/davlatyor-erkinov-598337230/',
      },
    ],
    [t]
  );

  return data;
}
