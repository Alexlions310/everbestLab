import 'src/global.css';

// i18n
import 'src/locales/i18n';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';

import { LocalizationProvider } from 'src/locales';

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Onlayn savdo mexanizmini yaratamiz',
  description:
    "Elektron savdo platformangizni shakllantiramiz va barcha muvaffaqiyatli top e-kommersiyalar qatoriga qo'shamiz.",
  keywords: 'Tashkent, Id, Software, Development, Company, Everbestlab',
  themeColor: '#000000',
  manifest: '/manifest.json',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
  icons: [
    { rel: 'icon', url: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/favicon.ico' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={primaryFont.className}
      style={{
        '--scroll-behavior': 'smooth!important',
        'scroll-behavior': 'smooth!important',
      }}
    >
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeContrast: 'default', // 'default' | 'bold'
              themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
              themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
              themeStretch: false,
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <SnackbarProvider>
                  <SettingsDrawer />
                  <ProgressBar />
                  {children}
                </SnackbarProvider>
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
