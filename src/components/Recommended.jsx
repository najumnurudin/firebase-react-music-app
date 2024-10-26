import { BsHeadset } from 'react-icons/bs'
import second from './../assets/playlist/1.jpg'
import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6'
import { useState } from 'react'

export default function Recommended() {
    const [pause, setPause] = useState(true)
    
    return (
        <div className="bg-[rgb(18,16,25)] w-[15vw] rounded-xl h-[50vh]">
            <div className="text-xs font-bold mt-1 mx-1"> Recommended</div>
            <div className="p-[3px] h-[45vh] rounded-xl">
                <div className="flex bg-sky-700 gap-1 rounded-xl p-1 mt-1">
                    <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh]"></div>
                    <div className="items-center cursor-default grid justify-center text-left">
                        <p className="text-xs ">Jux</p>
                        <p className="text-[12px] text-slate-300">Enjoy</p>
                    </div>
                    <div className="flex gap-1 items-center ml-5 late justify-center">
                        <div className="flex gap-1 cursor-default p-1 border border-dashed border-slate-800 px-2 bg-slate-600 rounded-xl">
                            <BsHeadset size={17}  className='late hover:text-amber-600 cursor-pointer'/>
                            <p className="text-[10px] ">1.4M</p>
                        </div>
                        {
                            pause ? (
                                <FaCirclePlay   onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                                ): (
                                <FaCirclePause  onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                            )
                        }
                    </div>
                </div>
                <div className="flex bg-sky-700 gap-1 rounded-xl p-1 mt-1">
                    <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh]"></div>
                    <div className="items-center cursor-default grid justify-center text-left">
                        <p className="text-xs ">Jux</p>
                        <p className="text-[12px] text-slate-300">Enjoy</p>
                    </div>
                    <div className="flex gap-1 items-center ml-5 late justify-center">
                        <div className="flex gap-1 cursor-default p-1 border border-dashed border-slate-800 px-2 bg-slate-600 rounded-xl">
                            <BsHeadset size={17}  className='late hover:text-amber-600 cursor-pointer'/>
                            <p className="text-[10px] ">1.4M</p>
                        </div>
                        {
                            pause ? (
                                <FaCirclePlay   onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                                ): (
                                <FaCirclePause  onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                            )
                        }
                    </div>
                </div>
                <div className="flex bg-sky-700 gap-1 rounded-xl p-1 mt-1">
                    <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh]"></div>
                    <div className="items-center cursor-default grid justify-center text-left">
                        <p className="text-xs ">Jux</p>
                        <p className="text-[12px] text-slate-300">Enjoy</p>
                    </div>
                    <div className="flex gap-1 items-center ml-5 late justify-center">
                        <div className="flex gap-1 cursor-default p-1 border border-dashed border-slate-800 px-2 bg-slate-600 rounded-xl">
                            <BsHeadset size={17}  className='late hover:text-amber-600 cursor-pointer'/>
                            <p className="text-[10px] ">1.4M</p>
                        </div>
                        {
                            pause ? (
                                <FaCirclePlay   onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                                ): (
                                <FaCirclePause  onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                            )
                        }
                    </div>
                </div>
                <div className="flex bg-sky-700 gap-1 rounded-xl p-1 mt-1">
                    <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh]"></div>
                    <div className="items-center cursor-default grid justify-center text-left">
                        <p className="text-xs ">Jux</p>
                        <p className="text-[12px] text-slate-300">Enjoy</p>
                    </div>
                    <div className="flex gap-1 items-center ml-5 late justify-center">
                        <div className="flex gap-1 cursor-default p-1 border border-dashed border-slate-800 px-2 bg-slate-600 rounded-xl">
                            <BsHeadset size={17}  className='late hover:text-amber-600 cursor-pointer'/>
                            <p className="text-[10px] ">1.4M</p>
                        </div>
                        {
                            pause ? (
                                <FaCirclePlay   onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                                ): (
                                <FaCirclePause  onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                            )
                        }
                    </div>
                </div>
                <div className="flex bg-sky-700 gap-1 rounded-xl p-1 mt-1">
                    <div style={{ backgroundImage: `url(${second})` }} className="backgImages rounded-full w-[6vh] h-[6vh]"></div>
                    <div className="items-center cursor-default grid justify-center text-left">
                        <p className="text-xs ">Jux</p>
                        <p className="text-[12px] text-slate-300">Enjoy</p>
                    </div>
                    <div className="flex gap-1 items-center ml-5 late justify-center">
                        <div className="flex gap-1 cursor-default p-1 border border-dashed border-slate-800 px-2 bg-slate-600 rounded-xl">
                            <BsHeadset size={17}  className='late hover:text-amber-600 cursor-pointer'/>
                            <p className="text-[10px] ">1.4M</p>
                        </div>
                        {
                            pause ? (
                                <FaCirclePlay   onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                                ): (
                                <FaCirclePause  onClick={() => setPause((prev) => !prev)} size={20} className='late p-1 rounded-full bg-slate-900 hover:text-green-600 cursor-pointer'/>
                            )
                        }
                    </div>
                </div>
                <div className="flex items-center cursor-pointer text-center justify-center p-[2px] rounded-xl hover:bg-slate-900 bg-slate-600 mt-2 late">
                    <div className="w-full py-1 rounded-xl text-pretty hover:text-green-600 late font-bold h-full border-dashed border border-cyan-600">
                        See more
                    </div>
                </div>
            </div>
        </div>
    )
}