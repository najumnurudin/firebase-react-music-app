import MainBody from "../components/MainBody";
import Sidebar from "../components/Sidebar";


export default function Home() {
    
    return (
        <div className="md:flex homeConainer w-[100vw] h-[100vh]">
            <Sidebar />
            <MainBody/>
        </div>
    )
}