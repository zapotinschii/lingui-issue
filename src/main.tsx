import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { messages as enMessages } from "./locales/en/messages";
import { messages as csMessages } from "./locales/ru/messages";

i18n.load({
  en: enMessages,
  ru: csMessages,
});
i18n.activate("ru");

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<I18nProvider i18n={i18n}>
				<App />
			</I18nProvider>
	</React.StrictMode>
);
