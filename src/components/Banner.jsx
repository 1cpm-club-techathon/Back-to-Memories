import Button from "./elements/Button";
import React from 'react';
import {useNavigate} from 'react-router-dom';



export const Banner = () => {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    //let navigate = useNavigate();
    let path = "/menu"; 
    navigate(path);
  }
    return (
        <div className="bg-pink-500 mt-7 mb-7 banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h3 className="mb-6 text-3xl font-bold text-white hover:text-purple-900">
                Make your memories immortal!
                </h3>
                <p className="font-extrabold text-lg text-black-600 py-2">
                "Capturing moments, preserving memories"
                </p>
                <div className="btn-container">
                    <Button onClick={routeChange}>Share your memories</Button>
                    <a href="/menu" className="text-white hover:text-green-500 font-bold text-decoration-line px-3">
                        View Gallery
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={require("../assets/images/birthdayimg.jpg")} alt="banner" className="max-h-95" />
            </div>
        </div>
        
    )
}