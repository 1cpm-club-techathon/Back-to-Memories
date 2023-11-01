import React, { useState } from 'react';
import Button from '../../components/elements/Button';
import { app } from "../../firebase-config";
import { getAuth,sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const ForgotPassword=()=> {
    let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    
    try {
    const auth = getAuth(app);
      await sendPasswordResetEmail(auth,email);
      alert('Password reset email sent. Please check your inbox.');
      alert("Mail has sent!");
      
    } catch (error) {
      alert(error.message);
    }
    navigate('/');
  };

  return (
    /*<div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
    */
    <div className="h-screen bg-black flex  items-center justify-center">
    <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
            <h5 className="text-white text-3xl text-center">Forgot Password</h5>
        <form className="w-full space-y-6" onSubmit={handleResetPassword}>
            <div>
                <label 
                htmlFor="email"
                className="block text-lg font-medium text-gray-200">Email</label>
                <input 
                //{...register('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                />
            </div>
            
            <Button className="bg-orange" size="large">Send Email</Button>
            </form>
            </div>
            </div>
        </div>
  );

}
export default ForgotPassword;