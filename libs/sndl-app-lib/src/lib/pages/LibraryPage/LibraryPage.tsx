import { SearchMusicForm } from "../../components";
import LibraryMusicItem from "./LibraryMusicItem/LibraryMusicItem";
import ZoneDivider from "./ZoneDivider/ZoneDivider";

const LibraryPage = () => {
	return (
        <div>
            <SearchMusicForm/>
            <ZoneDivider/>
            <LibraryMusicItem/>
        </div>
	);
};

export default LibraryPage;