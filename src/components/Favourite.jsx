import { IoPlayCircleOutline } from 'react-icons/io5'
import cover from './../assets/playlist/2.png'
import { Favourites } from '../hooks/Constants'

export default function Favourite(){

    return(
        <div className="p-1 rounded-xl h-[40vh] mt-3 items-center bg-slate-700">
            <p className="text-xs font-bold mx-3 cursor-default">Favourite</p>
            <div className="grid grid-cols-3 mt-3 bg-gradient-to-b from-[#ed633d] to-[#940596] p-1 rounded-2xl gap-2">
                {Favourites} {Favourites} {Favourites}
                {Favourites} {Favourites} {Favourites}
                {Favourites} {Favourites} {Favourites}
            </div>
        </div>
    )
}