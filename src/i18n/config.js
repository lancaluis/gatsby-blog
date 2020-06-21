import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        pt: {
            translations: require('./locales/pt.json')
        },
        en: {
            translations: require('./locales/en.json')
        },
        es: {
            translations: require('./locales/es.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    react: {
        wait: true,
    },
});

i18next.languages = ['pt', 'en', 'es'];

export default i18next;