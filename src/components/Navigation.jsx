import { BiBell, BiMenu, BiUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaBugSlash, FaUserShield } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDarkMode, MdFilterList, MdLightMode } from "react-icons/md";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {

    const {theme, setTheme} = useAuth()
    
    return (
        <div className="p-1 flex gap-2">
            <div className="flex text-center items-center rounded-full p-1 border border-slate-600 px-3 w-[78vw]">
                <div className="flex items-center late">
                    <FaSearch  size={22} className="rotate-[90deg] cursor-pointer late hover:text-amber-600"/>
                    <input type="text" placeholder="Search" className="text-xs p-2 rounded-full bg-transparent border-none outline-none w-[39vw]" />
                </div>
                <div className="flex gap-2 ml-[14vw]">
                    <p className="text-[11px] cursor-pointer hover:bg-amber-600 late border border-slate-600 rounded-full p-1 px-1 bg-slate-700">Trending</p>
                    <p className="text-[11px] cursor-pointer hover:bg-amber-600 late border border-slate-600 rounded-full p-1 px-1 bg-slate-700">Top searches</p>
                    <p className="text-[11px] cursor-pointer hover:bg-amber-600 late border border-slate-600 rounded-full p-1 px-1 bg-slate-700">Minimal</p>
                </div>
                <div className="flex mx-3">
                    <MdFilterList size={19} className="hover:text-amber-600 late cursor-pointer"/>
                </div>
            </div>
            <div className="flex text-center items-center justify-center w-fit p-1 rounded-full border border-slate-600">
                <IoSettingsOutline size={20} className="mx-1 hover:text-amber-600 hover:animate-spin late cursor-pointer"/>
                <FaBugSlash size={20} className="mx-1 hover:text-amber-600 late cursor-pointer"/>
                <BiBell size={20} className="mx-1 hover:text-amber-600 late cursor-pointer"/>
            </div>
            <div className="flex text-center items-center justify-center w-fit p-1 rounded-full border border-slate-600">
                <BiMenu size={20} className="mx-1 hover:text-amber-600 late cursor-pointer"/>
                {theme ?
                    <MdDarkMode onClick={() => setTheme((prev) => !prev)} size={20} className="mx-1 hover:text-amber-600 late cursor-pointer"/>:
                    <MdLightMode onClick={() => setTheme((prev) => !prev)} size={20} className="mx-1 hover:text-amber-600 late cursor-pointer"/>
                }
                <BiUser size={20} className="mx-1 hover:text-amber-600 late cursor-pointer"/>
            </div>
        </div>
    )
}