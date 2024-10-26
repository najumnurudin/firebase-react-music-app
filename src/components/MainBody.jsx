import Content from "./Content";
import Navigation from "./Navigation";

export default function MainBody() {
    
    return (
        <div className=" h-100vh] w-[96vw] ml-1">
            <Navigation />
            <Content/>
        </div>
    )
}