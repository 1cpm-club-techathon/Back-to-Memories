import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import Home from "../pages/Home/Home.jsx";
import { Header } from "../components/Header.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
const Navigation = () =>{
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;