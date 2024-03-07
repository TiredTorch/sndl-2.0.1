import { useMemo } from "react";
import { Box } from "@mui/material";
import { useTypedSelector } from "../../redux";
import SettingItemForm from "./SettingItemForm/SettingItemForm";
import { settingItemFormStyles } from "./SettingPage.styles";

const SettingPage = () => {
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

	return (
        <Box
            sx={settingItemFormStyles.root}
        >
            {settingOptions.map((
                item, i
                ) => (
                    <SettingItemForm
                        key={i}
                        {...item}
                    />
                ))
            }
        </Box>
	);
};

export default SettingPage;