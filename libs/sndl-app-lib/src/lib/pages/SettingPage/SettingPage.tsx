import {
	useCallback,
	useMemo,
	useState
} from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";
import {
	Button,
	ConfigProfileModal
} from "../../components";
import { useTypedSelector } from "../../redux";
import SettingItemForm from "./SettingItemForm/SettingItemForm";
import { settingItemFormStyles } from "./SettingPage.styles";

const SettingPage = () => {
	const intl = useIntl();

	const [isOpenConfig, setIsOpenConfig] = useState(false);

	const isWorkshopSoundMuted = useTypedSelector(store => store.userSlice.isWorkshopSoundMuted);
	const isNotificationsEnabled = useTypedSelector(store => store.userSlice.isNotificationsEnabled);
	const isListenHistoryPublic = useTypedSelector(store => store.userSlice.isListenHistoryPublic);
	const isAdorable = useTypedSelector(store => store.userSlice.isAdorable);
	const isVisualizerEnabled = useTypedSelector(store => store.userSlice.isVisualizerEnabled);

	const settingOptions = useMemo(
		() => [
			{
				title: "TXT_MUTE_WORKSHOP",
				value: isWorkshopSoundMuted,
				handler: console.log
			},
			{
				title: "TXT_ENABLE_NOTIFICATIONS",
				value: isNotificationsEnabled,
				handler: console.log
			},
			{
				title: "TXT_SHOW_HISTORY",
				value: isListenHistoryPublic,
				handler: console.log
			},
			{
				title: "TXT_BE_ADORABLE",
				value: isAdorable,
				handler: console.log
			},
			{
				title: "TXT_ENABLE_VISUALISATOR",
				value: isVisualizerEnabled,
				handler: console.log
			}
		],
		[
			isAdorable, 
			isListenHistoryPublic, 
			isNotificationsEnabled, 
			isVisualizerEnabled, 
			isWorkshopSoundMuted
		]
	);

	const handleClosePopup = useCallback(
		() => {
			setIsOpenConfig(false);
		},
		[setIsOpenConfig],
	);

	const handleOpenPopup = useCallback(
		() => {
			setIsOpenConfig(true);
		},
		[setIsOpenConfig],
	);

	return (
        <Box
            sx={settingItemFormStyles.root}
        >
            <Button
                onClick={handleOpenPopup}
                customVariant="sendMessageForm"
            >
                {intl.formatMessage({ id: "TXT_SETTING_EDIT_PROFILE" })}
            </Button>
            {settingOptions.map((
                item, i
                ) => (
                    <SettingItemForm
                        key={i}
                        {...item}
                    />
                ))
            }
            <ConfigProfileModal
                isOpen={isOpenConfig}
                onClose={handleClosePopup}
            />
        </Box>
	);
};

export default SettingPage;