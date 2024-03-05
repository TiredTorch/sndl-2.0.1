import dayjs from "dayjs";
import {
	FC,
	useEffect
} from "react";
import {
	CustomFormats,
	IntlProvider
} from "react-intl";
import messagesEn from "../../i18n/en.json";
import {
	AppIntlProviderProps,
	MessagesProps
} from "./AppIntlProvider.types";

export const AppIntlProvider: FC<AppIntlProviderProps> = ({
	children
}) => {
	const currentLocale = "en-US";

	const formats: CustomFormats = {
		number: {
			currency: {
				style: "currency",
				currency: "AUD", 
			},
		},
	};

	const messages: MessagesProps = {
		en: messagesEn,
		"en-AU": messagesEn
	};

	useEffect(
		() => {
			document.documentElement.lang = currentLocale;

			dayjs.locale(currentLocale);
		},
		[currentLocale]
	);

	return (
		<IntlProvider
			locale={currentLocale}
			messages={messages[currentLocale] ?? messages["en"]}
			formats={formats}
			defaultLocale="en"
		>
			{children}
		</IntlProvider>
	);
};

export default AppIntlProvider;
