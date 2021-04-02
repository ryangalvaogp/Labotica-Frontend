import { useContext } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Dashboard from "../components/profile/Dashboard";
import { ProfileContext } from "../contexts/profileContext";

export default function Profile() {
    const { isLogged, funcao } = useContext(ProfileContext)
    return (
        <>
            <Navbar />
            {isLogged ?
                <Dashboard entity={funcao} />
                :
                <Login />
            }
        </>
    )
}
