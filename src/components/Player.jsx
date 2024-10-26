import { useRef, useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { BsPause, BsPlay, BsRepeat1, BsShuffle, BsSkipBackward, BsSkipForward, BsVolumeMute, BsVolumeUpFill } from 'react-icons/bs';
import { CiRepeat } from 'react-icons/ci';
import { songPlayList } from '../hooks/Constants';
import Loading from './Loading';
import { FcHeadset, FcLikePlaceholder } from 'react-icons/fc';
import { BiCommentAdd, BiInfoCircle } from 'react-icons/bi';
import { FaStream } from 'react-icons/fa';

export default function AudioPlayer() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [loading, setLoading] = useState(false)
  
  const totalSongIndex = songPlayList.length;
  const [index, setIndex] = useState(0);

  const [currentPlaying, setCurrentPlaying] = useState(songPlayList[index].song);
  const [currentPlayingCover, setCurrentPlayingCover] = useState(songPlayList[index].songCover);
  const [currentPlayingInfo, setCurrentPlayingInfo] = useState(songPlayList[index].info);

  const handleNextSong = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSongIndex); // Move to the next song and loop if necessary
  };

  const handlePrevSong = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSongIndex) % totalSongIndex); // Move to the previous song and loop if necessary
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement.addEventListener('timeupdate', updateCurrentTime);
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener('timeupdate', updateCurrentTime);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Update current song when the index changes
  useEffect(() => {
    setLoading(true)
    setCurrentPlaying(songPlayList[index].song);
    setCurrentPlayingCover(songPlayList[index].songCover)
    setCurrentPlayingInfo(songPlayList[index].info)
    setLoading(false)
    console.log("Current Playing", currentPlaying)
  }, [index]);

  // Play the new song immediately after the song is switched
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play(); // Play the song after updating the source
    }
  }, [currentPlaying, isPlaying]);

  // Convert time from seconds to MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  // Handle progress bar interaction
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className='items-center'>
        {loading ?
          <div className="w-[35vh] h-[30vh] items-center justify-center pl-[10vh] pt-[8vh] text-center border-dashed p-1 border">
              <Loading height={80} width={80} />
          </div> :
          <div className="flex items-center justify-center mt-2 text-center float-none">
            <img src={currentPlayingCover} className='w-[20vh] transition-all h-[20vh] delay-1000 object-cover rounded-xl' alt="" />
          </div>
        }
        <div className="items-center text-center justify-center text-xs mt-3 pb-2">
          <div className="">{currentPlayingInfo.length > 5 ? currentPlayingInfo.slice(0,9) + '..' : currentPlayingInfo}</div>
          <div className="">{currentPlayingInfo.length > 5 ? currentPlayingInfo.slice(0,13) + '..' : currentPlayingInfo}</div>
        </div>
        <audio style={{visibility: 'hidden'}} hidden ref={audioRef} src={currentPlaying} />
        <div className="bg-slate-800 mx-[7%] items-center text-center justify-center w-fit flex gap-2 rounded-xl m-1 text-xs px-1 cursor-default">
          <FcLikePlaceholder size={23} className='p-1 text-white m-1 cursor-pointer bg-transparent hover:bg-cyan-800 late rounded-full '/>
          <BiCommentAdd size={23} className='p-1 text-white m-1 cursor-pointer bg-transparent hover:bg-cyan-800 late rounded-full '/>
          <FcHeadset size={23} className='p-1 text-white m-1 cursor-pointer bg-transparent hover:bg-cyan-800 late rounded-full '/>
          <BiInfoCircle size={23} className='p-1 text-white m-1 cursor-pointer bg-transparent hover:bg-cyan-800 late rounded-full '/>
          <FaStream size={23} className='p-1 text-white m-1 cursor-pointer bg-transparent hover:bg-cyan-800 late rounded-full '/>
        </div>
        <div className="flex items-center text-center justify-between pt-1 px-1">
          <div className="text-[12px] cursor-default">{formatTime(currentTime)}</div>
          <ProgressBar
              className='cursor-default late'
              completed={(currentTime / duration) * 100 || 0}
              customLabel=' '
              width='25vh'
              animateOnRender={false}
              transitionDuration='0s'
              borderRadius='50px'
              height='5px'
              baseBgColor='#ff00a6'
              bgColor='white'
          />
          <div className="text-[12px] cursor-default">{formatTime(duration)}</div>
        </div>
        <div className="flex justify-center pb-2 items-center text-center">
            <BsShuffle size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' />
            <BsSkipBackward 
                onClick={() => {
                    handlePrevSong();
                    setIsPlaying(true); // Ensure playback after changing the song
                }}
                size={27} 
                className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' 
            />
            {isPlaying ?
            <BsPause onClick={togglePlayPause} size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' /> :
            <BsPlay onClick={togglePlayPause} size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' />
            }
            <BsSkipForward
                onClick={() => {
                    handleNextSong();
                    setIsPlaying(true); // Ensure playback after changing the song
                }}
                size={27} 
                className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' 
            />
            {repeat ?
            <BsRepeat1 onClick={() => setRepeat(!repeat)} size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' /> :
            <CiRepeat onClick={() => setRepeat(!repeat)} size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' />
            }
            {isMuted ?
            <BsVolumeMute   onClick={toggleMute}  size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' /> :
            <BsVolumeUpFill onClick={toggleMute}  size={27} className='p-1 hover:text-black hover:bg-slate-300 late cursor-pointer rounded-full right-full mt-1 mx-1' />
            }
        </div>
    </div>
  )
}
