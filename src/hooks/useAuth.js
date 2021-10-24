import { useContext } from "react"
import { AuthContext } from "../components/authContext/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;