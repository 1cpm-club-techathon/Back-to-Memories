
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
                setLoading(false);
                alert("Logged in Successfully!");
                navigate('/');
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong Password')
                }
                if (error.code === 'auth/user-not-found') {
                    alert('Email not found, please registe')
                }
                setLoading(false);
            })
    
    }
    return (
        <div className="h-screen bg-black flex  items-center justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-white text-3xl text-center">Login</h5>
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-200">Email</label>
                        <input 
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-200">Password</label>
                        <input 
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <Button className="bg-orange" size="large">{loading ? "loading" : 'Login'}</Button>
                    <Link to="/register">
                    <button className="text-white" > New User? Register</button>
                    </Link>
                    <br/>
                    <Link to="/forgotpassword">
                    <button className="text-white" > Forgot Password? Click here</button>
                    </Link>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Login;