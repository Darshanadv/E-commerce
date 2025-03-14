import React, { use, useEffect, useState } from 'react'
import useEcomStore from "./../../store/useEcomStore";
import { useNavigate } from 'react-router-dom';


const Login = () => {
      const { data, loading, error, fetchData } = useEcomStore();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [checkIn, setCheckIn] = useState(false);
      const [credentialmessage, setCredentialMessage] = useState(true);
    

      const navigate = useNavigate()

      const handleClick=()=>{
        navigate("/landing")
      }
       

      useEffect(() => {
        fetchData();
      }, [fetchData]);
    
      // console.log(checkIn)
      
      const login = () => {


        const user = data.find((user)=>user.email === email && user.password === password)
       
        
          if (user) {
            setCredentialMessage(true);
            handleClick();
   

            if(checkIn){
              localStorage.setItem('Email',email);
              localStorage.setItem('Password',password)
            }
            
          } else {
            setCredentialMessage(false);
            console.log("credential do not match");
            
          }
        
      };

      

  return (
   <>
         <main className="p-5 bg-gray-100 h-screen">
        <form className="w-[400px] mx-auto p-6 my-16" noValidate>
          <h2 className="text-2xl font-semibold text-center mb-5 ">
            Login to your account
          </h2>

          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="loginEmail"
              type="email"
              name="email"
              placeholder="Your email address"
              className="border-gray-300 border p-3 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="loginPassword"
              type="password"
              name="password"
              placeholder="Your password"
              className="border-gray-300 border p-3 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <input
                id="loginRememberMe"
                type="checkbox"
                className="mr-3 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
              />
              <label htmlFor="loginRememberMe" onClick={()=>setCheckIn(true)}>Remember Me</label>
            </div>
          </div>
          {!credentialmessage && <p className="text-red-500 mb-3"> 
            Email id & Password do not match !
          </p>}
          <button
            type="button"
            onClick={login}
            className="btn-primary p-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full"
          >
            Login
          </button>
        </form>
      </main>
   </>
  )
}

export default Login