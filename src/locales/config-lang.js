'use client';

import merge from 'lodash/merge';
import { ru as ruRUdapter, trTR as trTRdapter } from 'date-fns/locale';

// date-pickers
import { trTR as trTRDate, ruRU as ruRUDate } from '@mui/x-date-pickers/locales';
// core
import { trTR as trTRCore, ruRU as ruRUCore } from '@mui/material/locale';
// data-grid
import { trTR as trTRDataGrid, ruRU as ruRUDataGrid } from '@mui/x-data-grid';

// REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.

export const allLangs = [
  {
    label: "O'zbek",
    value: 'uz',
    systemValue: merge(trTRDate, trTRDataGrid, trTRCore),
    adapterLocale: trTRdapter,
    icon: 'flagpack:uz',
  },
  {
    label: 'Русский',
    value: 'ru',
    systemValue: merge(ruRUDate, ruRUDataGrid, ruRUCore),
    adapterLocale: ruRUdapter,
    icon: 'flagpack:ru',
  },
];

export const defaultLang = allLangs[0]; // Uzbek
