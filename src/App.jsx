import { useState } from "react"
import Authentication from "./pages/AuthenticationComponent"
import Home from "./pages/Home"
import { AuthProvider } from "./contexts/AuthContext"

export default function App() {

  const [user, setUser, theme] = useState(true)
  return (
    <AuthProvider>
      <div className="flex text-white">
      {user ? (
        <>
          <Home/>
        </>
      ): (
          <Authentication/>
        )}
    </div>
    </AuthProvider>
  )
}