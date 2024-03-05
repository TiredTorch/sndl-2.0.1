import { ReactNode } from "react";
import { DataProps } from "../../types";

export type AppIntlProviderProps = {
	children: ReactNode
};

export type LocaleProps = DataProps<string>;

export type MessagesProps = DataProps<LocaleProps>;
