import { Headphones } from 'lucide-react'
import second from './../assets/playlist/1.jpg'
import { BsHeartFill } from 'react-icons/bs'
import { BiPauseCircle, BiPlayCircle } from 'react-icons/bi'
import { useState } from 'react'

export default function Recent() {

    const [pause, setPause] = useState(true)
    return (
        <div className="bg-gradient-to-b from-[#0c4f6e] to-[#112b36] w-[22vw] rounded-xl h-[50vh]">
            <div className="text-xs mx-3 mt-1 cursor-default font-bold">Recently Played</div>
            <div className="gap-2 m-1 h-[45.9vh] rounded-xl p-1">
                <div className="flex justify-between p-1 rounded-xl bg-[#212121] mt-1 mx-1">
                    <div className="flex">
                        <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh] cursor-pointer late"></div>
                        <div className="items-center grid px-3 cursor-default justify-center text-left">
                            <p className="text-xs ">Diamond P...</p>
                            <p className="text-xs ">Jeje</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-[2px] text-center">
                        <div className="flex text-[10px] gap-1 border border-dashed border-slate-600 px-2 p-1 rounded-full"><Headphones size={14} className='hover:text-amber-600 late cursor-pointer'/>2.3M</div>
                        <div className="flex text-[10px] gap-1 items-center justify-center">
                            <BsHeartFill size={14} className='hover:text-amber-600 late cursor-pointer' />
                            {
                                pause ?
                                    <BiPlayCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                                :
                                <BiPauseCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-1 rounded-xl bg-[#212121] mt-1 mx-1">
                    <div className="flex">
                        <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh] cursor-pointer late"></div>
                        <div className="items-center grid px-3 cursor-default justify-center text-left">
                            <p className="text-xs ">Diamond P...</p>
                            <p className="text-xs ">Jeje</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-[2px] text-center">
                        <div className="flex text-[10px] gap-1 border border-dashed border-slate-600 px-2 p-1 rounded-full"><Headphones size={14} className='hover:text-amber-600 late cursor-pointer'/>2.3M</div>
                        <div className="flex text-[10px] gap-1 items-center justify-center">
                            <BsHeartFill size={14} className='hover:text-amber-600 late cursor-pointer' />
                            {
                                pause ?
                                    <BiPlayCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                                :
                                <BiPauseCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-1 rounded-xl bg-[#212121] mt-1 mx-1">
                    <div className="flex">
                        <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh] cursor-pointer late"></div>
                        <div className="items-center grid px-3 cursor-default justify-center text-left">
                            <p className="text-xs ">Diamond P...</p>
                            <p className="text-xs ">Jeje</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-[2px] text-center">
                        <div className="flex text-[10px] gap-1 border border-dashed border-slate-600 px-2 p-1 rounded-full"><Headphones size={14} className='hover:text-amber-600 late cursor-pointer'/>2.3M</div>
                        <div className="flex text-[10px] gap-1 items-center justify-center">
                            <BsHeartFill size={14} className='hover:text-amber-600 late cursor-pointer' />
                            {
                                pause ?
                                    <BiPlayCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                                :
                                <BiPauseCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-1 rounded-xl bg-[#212121] mt-1 mx-1">
                    <div className="flex">
                        <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh] cursor-pointer late"></div>
                        <div className="items-center grid px-3 cursor-default justify-center text-left">
                            <p className="text-xs ">Diamond P...</p>
                            <p className="text-xs ">Jeje</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-[2px] text-center">
                        <div className="flex text-[10px] gap-1 border border-dashed border-slate-600 px-2 p-1 rounded-full"><Headphones size={14} className='hover:text-amber-600 late cursor-pointer'/>2.3M</div>
                        <div className="flex text-[10px] gap-1 items-center justify-center">
                            <BsHeartFill size={14} className='hover:text-amber-600 late cursor-pointer' />
                            {
                                pause ?
                                    <BiPlayCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                                :
                                <BiPauseCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-1 rounded-xl bg-[#212121] mt-1 mx-1">
                    <div className="flex">
                        <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh] cursor-pointer late"></div>
                        <div className="items-center grid px-3 cursor-default justify-center text-left">
                            <p className="text-xs ">Diamond P...</p>
                            <p className="text-xs ">Jeje</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-[2px] text-center">
                        <div className="flex text-[10px] gap-1 border border-dashed border-slate-600 px-2 p-1 rounded-full"><Headphones size={14} className='hover:text-amber-600 late cursor-pointer'/>2.3M</div>
                        <div className="flex text-[10px] gap-1 items-center justify-center">
                            <BsHeartFill size={14} className='hover:text-amber-600 late cursor-pointer' />
                            {
                                pause ?
                                    <BiPlayCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                                :
                                <BiPauseCircle onClick={() => setPause((prev) => !prev)} size={26} className='hover:text-amber-600 late cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}