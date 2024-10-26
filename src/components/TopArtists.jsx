import second from './../assets/svg/3.jpg'
import { GrAddCircle } from 'react-icons/gr'
import { CiSearch } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'
import { Slides } from '../hooks/Constants'
export default function TopArtists() {
    
    return (
        <div className="p-1 bg-[rgb(18,16,25)] items-center justify-center w-[19vw] rounded-xl h-[50.6vh]">
            <div className="text-xs font-bold mx-3 m-1">Top Artists</div>
            <div className="grid grid-cols-3 gap-3 max-h-[31vh]">
                {Slides.map((artist, index) =>(
                    <div key={index}
                    style={{backgroundImage: `url(${artist.image})`}}
                    className="rounded-full flex items-center text-center justify-center artistProfile w-[9vh] h-[9vh]  m-1 late cursor-pointer"
                    >
                    </div>
                ))
                }
            </div>
            <div className="flex w-full mt-[6vh]">
                <div className="p-1 items-center text-center justify-center bg-slate-500 m-1 rounded-xl px-[17%] late border border-dashed hover:border-amber-600 hover:border-dashed">
                    <CiSearch className='hover:text-red-50 late p-1 rounded-full hover:bg-black cursor-pointer' size={26}/>
                </div>
                <div className="p-1 items-center text-center justify-center bg-slate-500 m-1 rounded-xl px-[17%] late border border-dashed hover:border-amber-600 hover:border-dashed">
                    <MdDeleteForever className='hover:text-red-600 late p-1 rounded-full hover:bg-white cursor-pointer' size={26}/>
                </div>
            </div>
        </div>
    )
}