import { MessageCircleHeartIcon } from "lucide-react";
import { BiDotsHorizontal, BiMicrophone } from "react-icons/bi";
import { GoFlame, GoHomeFill } from "react-icons/go";
import { MdMusicNote } from "react-icons/md";

export default function Sidebar() {
    
    return (
        <div className="p-1 w-[3.3vw] rounded-md">
            <MdMusicNote className="late cursor-pointer mt-1 hover:bg-slate-800 bg-amber-600 rounded-full p-[3px]" size={32}/>
            <div className="">
                <GoHomeFill className="late cursor-pointer mt-4 hover:bg-amber-600 bg-slate-800 rounded-full p-[3px]" size={32}/>
                <GoFlame className="late cursor-pointer text-opacity-70 text-slate-300 mt-4 hover:bg-amber-600 bg-slate-800 rounded-full p-[3px]" size={32}/>
                <BiMicrophone className="late cursor-pointer text-opacity-70 text-slate-300 mt-4 hover:bg-amber-600 bg-slate-800 rounded-full p-[3px]" size={32}/>
                <MessageCircleHeartIcon className="late cursor-pointer text-opacity-70 text-slate-300 mt-4 hover:bg-amber-600 bg-slate-800 rounded-full p-[3px]" size={32}/>
                <BiDotsHorizontal className="late cursor-pointer text-opacity-70 text-slate-300 mt-4 hover:bg-amber-600 bg-slate-800 rounded-full p-[3px]" size={32}/>
            </div>
        </div>
    )
}