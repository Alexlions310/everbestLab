import { m } from 'framer-motion';
import { useCallback } from 'react';

import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { useLocales, useTranslate } from 'src/locales';

import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { useTheme } from '@mui/material/styles';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const popover = usePopover();

  const { onChangeLang } = useTranslate();

  const { allLangs, currentLang } = useLocales();

  const handleChangeLang = useCallback(
    (newLang) => {
      onChangeLang(newLang);
      popover.onClose();
    },
    [onChangeLang, popover]
  );

  return (
    <>
      <IconButton
        component={m.button}
        ariaLabel="Language Selector"
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        color="primary"
        sx={{
          width: 40,
          height: 40,
          ...(popover.open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <LanguageIcon />
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
        {allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => handleChangeLang(option.value)}
          >
            <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} />

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}

export const LanguageIcon = (props) => {
  const theme = useTheme();
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={12.5518}
        cy={12}
        r={10}
        stroke={theme.palette.mode === 'light' ? '#1A1D1F' : '#fff'}
        strokeWidth={1.5}
      />
      <ellipse
        cx={12.5518}
        cy={12}
        rx={4}
        ry={10}
        stroke={theme.palette.mode === 'light' ? '#1A1D1F' : '#fff'}
        strokeWidth={1.5}
      />
      <path
        d="M2.55176 12H22.5518"
        stroke={theme.palette.mode === 'light' ? '#1A1D1F' : '#fff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
