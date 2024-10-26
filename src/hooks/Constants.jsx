import slide_1 from './../assets/images/3.jpg'
import slide_2 from './../assets/images/9.jpg'
import slide_3 from './../assets/images/10.jpg'
import slide_4 from './../assets/images/12.jpg'
import slide_5 from './../assets/images/7.jpg'
import slide_6 from './../assets/images/18.jpg'
import slide_7 from './../assets/images/17.jpg'
import slide_8 from './../assets/images/2.jpg'
import slide_9 from './../assets/images/4.jpg'

import cover from './../assets/playlist/2.png'

import audio_1 from './../assets/audio/1.mp3'
import audio_2 from './../assets/audio/2.mp3'
import audio_3 from './../assets/audio/3.mp3'
import audio_4 from './../assets/audio/4.mp3'
import audio_5 from './../assets/audio/5.mp3'
import audio_6 from './../assets/audio/6.mp3'
import { IoPlayCircleOutline } from 'react-icons/io5'
 
export const Slides = [
    {image: slide_1, title: ''},
    {image: slide_2, title: ''},
    {image: slide_3, title: ''},
    {image: slide_4, title: ''},
    {image: slide_5, title: ''},
    {image: slide_6, title: ''},
    {image: slide_7, title: ''},
    {image: slide_8, title: ''},
    {image: slide_9, title: ''}
]

export const songPlayList = [
    {song: audio_1, songCover: slide_1, info: 'Lorem, ipsum dolor.'},
    {song: audio_2, songCover: slide_2, info: 'Lorem, ipsum dolor.'},
    {song: audio_3, songCover: slide_3, info: 'Lorem, ipsum dolor.'},
    {song: audio_4, songCover: slide_4, info: 'Lorem, ipsum dolor.'},
    {song: audio_5, songCover: slide_5, info: 'Lorem, ipsum dolor.'},
    {song: audio_6, songCover: slide_6, info: 'Lorem, ipsum dolor.'},
]

export const Favourites = <div className="flex items-baseline bg-[#150c10] rounded-2xl h-[10vh] w-[10vh]  p-1" style={{backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<IoPlayCircleOutline size={30} className='p-1 rounded-full opacity-0 hover:opacity-100 bg-black cursor-pointer late mt-[50%] mx-[20%] hover:bg-cyan-600 hover:rotate-[180deg]'/>
</div>