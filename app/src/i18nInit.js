import { addLocale, useLocale } from 'ttag';
import * as cookie from './cookie';

const LOCALE_COOKIE = '__locale';

function getLocale() {
  return cookie.get(LOCALE_COOKIE) || 'en';
}

export function saveLocale(locale) {
  cookie.set(LOCALE_COOKIE, locale);
}

// setup
const locale = getLocale();

if (locale !== 'en') {
  const translationsObj = require(`../i18n/${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}
