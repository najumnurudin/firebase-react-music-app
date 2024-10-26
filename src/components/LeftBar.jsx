import { WifiHigh } from "lucide-react";
import { useState } from "react";
import Player from "./Player";
import { useAuth } from "../contexts/AuthContext";
import { MdLogout } from "react-icons/md";
import Favourite from "./Favourite";

export default function LeftBar() {

    const {theme, setTheme, user, setUser} = useAuth()
    const [pause, setPause] = useState(true)

    const handleLogout = async () =>{
        await setUser(false)
    }

    return (
        <div className=" bg-[#212121] h-full w-[20vw] rounded-3xl p-1">
            <div style={{background: theme ? '' : 'black'}} className=" bg-gradient-to-b from-[#0c4f6e] to-[#112b36] p-1 w-full mt-1 rounded-xl delay-1000 transition-all h-[46vh]">
                <Player/>
            </div>
            <div className="">
                <Favourite/>
            </div>
        </div>
    )
}