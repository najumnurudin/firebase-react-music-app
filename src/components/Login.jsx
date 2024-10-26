import { useState } from "react";
import { CgLock } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import Loading from "./Loading";

export default function Login() {

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div className="h-fit text-white bg-gradient-to-b rounded-xl to-red-600 from-orange-600 px-5 py-3 items-center text-center justify-center ">
            <p className="font-bold">Login</p>

            <div className="flex pl-1 items-center  my-5 text-center justify-center gap-1 rounded-md bg-slate-600">
                <MdEmail size={28} />
                <input value={email} type="email" className="p-2 px-3 text-sm rounded-r-md w-[200px] bg-slate-700" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="flex pl-1 items-center my-6 text-center justify-center gap-1 rounded-md bg-slate-600">
                <CgLock size={28} />
                <input value={password} type="password" className="p-2 px-3 text-sm rounded-r-md w-[200px] bg-slate-700" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="">
                {loading
                    ? (
                        <Loading width={57} height={57}/>
                    ): (
                        <div className="flex">
                            <button className="p-1 rounded-md mt-18 m-1  latesubmitButton ml-[80px] px-7 bg-cyan-800 hover:bg-cyan-600 late">Login</button>
                        </div> 
                    )}
            </div>
        </div>
    )
}