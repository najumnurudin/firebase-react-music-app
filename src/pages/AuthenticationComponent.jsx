import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function Authentication() {
    
    return (
        <div className="md:flex bg-gradient-to-b from-[#10a9cf] to-[#0a414f] w-[100vw] h-[100vh]  md:gap-20 p-10">
            <Login />
            <SignUp/>
        </div>
    )
}