import img from './../assets/svg/pausedImg.png'
export default function PausedMusic() {
    
    return (
        <div className="flex">
            <img src={img} className='cursor-default h-[6vh] w-[32vh]' />
        </div>
    )
}