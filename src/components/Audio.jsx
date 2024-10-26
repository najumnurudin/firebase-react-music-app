import { useRef, useState, useEffect } from 'react';
import { SkipBack, SkipForward } from 'lucide-react';
import ProgressBar from "@ramonak/react-progress-bar";
import { PlayList } from '../hooks/Constants';

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const totalSongIndex = PlayList.length;
  const [index, setIndex] = useState(0);
  const [currentPlaying, setCurrentPlaying] = useState(PlayList[index].song);

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

  // Update current song when the index changes
  useEffect(() => {
    setCurrentPlaying(PlayList[index].song);
  }, [index]);

  // Play the new song immediately after the song is switched
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play(); // Play the song after updating the source
    }
  }, [currentPlaying, isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement.addEventListener('timeupdate', updateCurrentTime);
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener('timeupdate', updateCurrentTime);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

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
    <div className='bg-cyan-600 rounded-xl w-fit'>
      <audio controls ref={audioRef} src={currentPlaying} />
      <div>
        <button
          className='px-2 py-1 m-2 cursor-pointer hover:bg-opacity-70 late bg-slate-800 rounded-md'
          onClick={togglePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          className='px-2 py-1 m-2 cursor-pointer hover:bg-opacity-70 late bg-slate-800 rounded-md'
          onClick={toggleMute}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="my-4">
        {/* <input 
          type="range" 
          min="0" 
          max="100" 
          value={(currentTime / duration) * 100 || 0} 
          onChange={handleSeek} 
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" 
        /> */}
        <ProgressBar
          className='p-1 cursor-default'
          completed={(currentTime / duration) * 100 || 0}
          customLabel=' '
          width='40vh'
          animateOnRender={false}
          transitionDuration='0s'
          borderRadius='50px'
          height='8px'
          baseBgColor='black'
          bgColor='#fc9c02'
        />
        <div className="flex justify-between text-white">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex w-fit rounded-xl gap-4 m-2 px-3 py-1">
        <button
          onClick={() => {
            handlePrevSong();
            setIsPlaying(true); // Ensure playback after changing the song
          }}
          className='px-6 py-1 rounded-md bg-amber-600 contain-paint hover:bg-opacity-70 late'
        >
          <SkipBack className='text-white cursor-pointer late hover:text-amber-600' />
        </button>
        <button
          onClick={() => {
            handleNextSong();
            setIsPlaying(true); // Ensure playback after changing the song
          }}
          className='px-6 py-1 rounded-md bg-amber-600 contain-paint hover:bg-opacity-70 late'
        >
          <SkipForward className='text-white cursor-pointer late hover:text-amber-600' />
        </button>
      </div>
    </div>
  );
};
