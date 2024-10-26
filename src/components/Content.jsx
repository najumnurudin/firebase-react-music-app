import ContentList from "./ContentList";
import LeftBar from "./LeftBar";


export default function Content() {
    
    return (
        <div className="md:flex w-[96.3vw] rounded-md h-[92.1vh] p-1">
            <ContentList />
            <LeftBar/>
        </div>
    )
}