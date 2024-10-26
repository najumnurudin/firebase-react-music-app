import Genre from "./Genre";
import PlayList from "./Playlist";
import Recent from "./Recent";
import Recommended from "./Recommended";
import TopArtists from "./TopArtists";

export default function ContentList() {
    
    return (
        <div className="w-[81vw] mx-1 bg-[#212121] rounded-xl">
            <PlayList />
            <div className="flex p-2 gap-3 mt-2 text-xs">
                <Genre />
                <TopArtists />
                <Recent />
                <Recommended/>
            </div>
        </div>
    )
}