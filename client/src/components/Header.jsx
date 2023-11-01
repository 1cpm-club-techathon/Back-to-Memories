import { Link } from "react-router-dom";
import Button from "./elements/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = ({cartCount}) =>{
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout =() =>{
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate('/');
    }

    useEffect(() =>{
        const checkAuthToken = () =>{
            const token = sessionStorage.getItem('Auth token');
            if(token){
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return() =>{
            window.removeEventListener('storage', checkAuthToken);
        }
    },[])

    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {
                      isLoggedIn ?
                        <Button onClick={handleLogout}>LogOut</Button> :
                        (
                            <>
                            <Link to="/login">Log In</Link>
                            <Link to="/register">Sign Up</Link>
                            </>
                        )
                    }
                    
                </div>
            </div>
        </nav>
    )
}