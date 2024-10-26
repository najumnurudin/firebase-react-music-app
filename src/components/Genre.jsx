import { CgPlayList } from "react-icons/cg";
import { FcAddColumn } from "react-icons/fc";
import { GrAdd } from "react-icons/gr";

export default function Genre() {
    
    return (
        <div className="p-1 bg-[rgb(18,16,25)] w-[17vw] rounded-xl h-[50.6vh]">
            <p className="text-xs font-bold mx-4 mt-1">Genre</p>
            <div className="grid grid-cols-2 mt-3">
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">Classic</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">House</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">reggae</div>
                <div className="p-1 px-1 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">Hip Hop</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">R&nb</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">Classic</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">Jazz</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">Country</div>
                <div className="p-1 px-3 cursor-pointer hover:bg-slate-950 late rounded-xl border-dashed border border-amber-600 bg-slate-800 w-[15vh] items-center justify-center text-center m-1">Blues</div>
            </div>
            <div className="flex border-dashed border border-slate-200 mt-[7vh] bg-slate-600 p-1 rounded-xl cursor-pointer late hover: hover:bg-slate-800 items-center justify-center text-center">
                <GrAdd size={20}/>
            </div>
            <div className="flex border-dashed border border-slate-200 mt-2 bg-slate-600 p-1 rounded-xl cursor-pointer late hover: hover:bg-slate-800 items-center justify-center text-center">
                <CgPlayList size={20}/>
            </div>
        </div>
    )
}