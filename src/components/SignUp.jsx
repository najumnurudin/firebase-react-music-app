import { useState } from "react";
import { CgLock } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import Loading from "./Loading";
import { CiUser } from "react-icons/ci";

export default function SignUp() {

    const [loading, setLoading] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    
    return (
        <div className="p-3 rounded-md ">
            <p className="bg-gradient-to-r from-red-600 to-amber-600 text-transparent bg-clip-text font-bold">Sign Up</p>

            <div className="flex pl-1 items-center  my-5 text-center justify-center gap-1 rounded-md bg-slate-600">
                <CiUser size={28} />
                <input value={username} type="text" className="p-2 px-3 text-sm rounded-r-md w-[200px] bg-slate-700" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="flex pl-1 items-center  my-5 text-center justify-center gap-1 rounded-md bg-slate-600">
                <MdEmail size={28} />
                <input value={email} type="email" className="p-2 px-3 text-sm rounded-r-md w-[200px] bg-slate-700" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="flex pl-1 items-center my-6 text-center justify-center gap-1 rounded-md bg-slate-600">
                <CgLock size={28} />
                <input value={password} type="password" className="p-2 px-3 text-sm rounded-r-md w-[200px] bg-slate-700" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="flex pl-1 items-center my-6 text-center justify-center gap-1 rounded-md bg-slate-600">
                <CgLock size={28} />
                <input value={repeatPassword} type="password" className="p-2 px-3 text-sm rounded-r-md w-[200px] bg-slate-700" onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Repeat Password" />
            </div>
            <div className="">
                {loading
                    ? (
                        <Loading width={57} height={57}/>
                    ): (
                        <div className="flex">
                            <button className="p-1 rounded-md mt-18 m-1  latesubmitButton ml-[80px] px-7 bg-cyan-800 hover:bg-cyan-600 late">Sign Up</button>
                        </div> 
                    )}
            </div>
        </div>
    )
}