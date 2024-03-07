export type SettingItemFormProps = {
	handler: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	title: string;
	value: boolean;
};