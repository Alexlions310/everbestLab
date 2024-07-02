import { useMemo } from 'react';
import { useTranslate } from 'src/locales';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      {
        title: t('links.main'),
        icon: <Iconify icon="solar:home-2-bold-duotone" />,
        path: '/#home',
      },
      {
        title: t('links.whyUs'),
        icon: <Iconify icon="solar:file-bold-duotone" />,
        path: '/#why-us',
      },
      {
        title: t('links.clients'),
        icon: <Iconify icon="solar:atom-bold-duotone" />,
        path: '/#clients',
      },
      {
        title: t('links.tarifs'),
        icon: <Iconify icon="solar:notebook-bold-duotone" />,
        path: '/#tarifs',
      },
      {
        title: t('links.team'),
        icon: <Iconify icon="solar:notebook-bold-duotone" />,
        path: '/#team',
      },
      {
        title: t('links.contact'),
        icon: <Iconify icon="solar:file-bold-duotone" />,
        path: '/#contact-us',
      },
    ],
    [t]
  );

  return data;
}
