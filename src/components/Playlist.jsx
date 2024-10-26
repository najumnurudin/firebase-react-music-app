import cover_1 from './../assets/playlist/1.jpg'
import cover_2 from './../assets/playlist/2.png'
import cover_3 from './../assets/playlist/3.png'
import cover_4 from './../assets/playlist/4.png'
import cover_5 from './../assets/playlist/6.png'
import cover_6 from './../assets/playlist/7.png'

import { IoPlayCircleOutline } from 'react-icons/io5'

export default function PlayList() {
    
    return (
        <div className="flex gap-6 px-[3vh]  py-2 m-1 rounded-xl">
            <div className="rounded-xl number_1 flex  h-[34vh] late">
                <img src={cover_6} className=' rounded-ful mt-3' />
                <div className=" absolute inline-block p-1 m-2  ">
                    <p className="text-xs">Live Vocal</p>
                    <div className="flex items-center text-center mt-[23vh] late">
                        <IoPlayCircleOutline size={32} className='late  bg-green-500 rounded-full hover:bg-cyan-600 p-1 hover-amber-600 cursor-pointer'/>
                        <p className="text-xs mx-2">Live Vocal</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl flex number_2 overflow-hidden h-[34vh] late">
                <img src={cover_2} className='' />
                <div className=" absolute inline-block gap-2 m-2 ">
                    <p className="text-xs">Street Banger</p>
                    <div className="flex items-center text-center mt-[23vh] late">
                        <IoPlayCircleOutline size={32} className='late  bg-green-500 rounded-full hover:bg-cyan-600 p-1 hover-amber-600 cursor-pointer'/>
                        <p className="text-xs mx-2">Live Vocal</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl number_3 flex overflow-hidden  h-[34vh] late">
                <img src={cover_3} className='' />
                <div className=" absolute inline-block gap-2 m-2 ">
                    <p className="text-xs text-blue-800">Afro-Beat</p>
                    <div className="flex items-center text-center mt-[23vh] late">
                        <IoPlayCircleOutline size={32} className='late  bg-green-500 rounded-full hover:bg-cyan-600 p-1 hover-amber-600 cursor-pointer'/>
                        <p className="text-xs mx-2">Live Vocal</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl number_4 flex overflow-hidden  h-[34vh] late">
                <img src={cover_4} className='mt-3' />
                <div className=" absolute inline-block gap-2 m-2 ">
                    <p className="text-xs bg-clip-text">Hip Hop</p>
                    <div className="flex items-center text-center mt-[23vh] late">
                        <IoPlayCircleOutline size={32} className='late  bg-green-500 rounded-full hover:bg-cyan-600 p-1 hover-amber-600 cursor-pointer'/>
                        <p className="text-xs mx-2">Live Vocal</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl number_5 flex overflow-hidden  h-[34vh] late">
                <img src={cover_5} className='' />
                <div className=" absolute inline-block gap-2 m-2 ">
                    <p className="text-xs bg-clip-text">Acoustic</p>
                    <div className="flex items-center text-center mt-[23vh] late">
                        <IoPlayCircleOutline size={32} className='late  bg-green-500 rounded-full hover:bg-cyan-600 p-1 hover-amber-600 cursor-pointer'/>
                        <p className="text-xs mx-2">Live Vocal</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl number_5 flex overflow-hidden  h-[34vh] late">
                <img src={cover_1} className='' />
                <div className=" absolute inline-block gap-2 m-2 ">
                    <p className="text-xs bg-clip-text">New release</p>
                    <div className="flex items-center text-center mt-[23vh] late">
                        <IoPlayCircleOutline size={32} className='late  bg-green-500 rounded-full hover:bg-cyan-600 p-1 hover-amber-600 cursor-pointer'/>
                        <p className="text-xs mx-2">Live Vocal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}