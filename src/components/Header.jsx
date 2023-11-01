import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/heart.svg";
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
        <nav id="header" className="bg-purple-950 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="togglecolor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img src={require("../assets/images/CPM (1).png")} alt="logo" className="w-20 h-27 object-cover pg-1"/>
            
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-l font-bold hover:text-orange-100">Home</Link>
                    <Link to="./About" className="text-l font-bold hover:text-orange-100">About</Link>
                    <Link to ="./Menu" className="text-l font-bold hover:text-orange-100">Gallery</Link>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart" className="mr-4 relative h-7 w-7">
                        <img src={cartIcon} alt="cart"/>
                        {cartCount>0? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div>:null}
                    </Link>
                    <Link to="/sell" className="font-bold hover:text-orange-100">Upload</Link>
                    {
                        isLoggedIn ?
                        <Button onClick={handleLogout}>LogOut</Button> :
                        (
                            <>
                            <Link to="/login" className="font-bold hover:text-orange-100">Login</Link>
                            <Link to="/register" className="font-bold hover:text-orange-100">Signup</Link>
                            </>
                        )
                    }
                    
                </div>
            </div>
        </nav>
    )
}