import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
	.use(initReactI18next)
	.init(
		{
			lng: 'en',
			fallbackLng: ['en', 'fa'],
			debug: false,
			ns: ['common', 'home', 'experience'],
			defaultNS: 'common',
			interpolation: {
				escapeValue: false,
			}
		},(err, t) => {
			if (err) return console.warn('something went wrong loading', err);
		}
	);

export default i18n;
