module.exports = process.env.APP_LANG ? {
    ttag: {
        resolve: { translations: `i18n/${process.env.APP_LANG}.po` }
    }
} : {};
