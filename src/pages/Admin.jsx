import React from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const AdminLogin = () => {

    const [Username, setUserName] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()

   const handleLogin = (event)=>{
   
    event.preventDefault()

    axios.post("http://localhost:1000/Admin/create", {
      "userName": Username,
      "Password":password
    }).then((response)=>{
      if(response){
        alert("login successfully")
        navigate("/Dashboard")
      }
      else{
        alert("username or passwerd incorrect")
      }
    })
   }


  return (
    <div className="fixed inset-0 bg-indigo-500 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-10 rounded-lg shadow-2xl w-full max-w-sm relative">
      
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-300">Admin Login</h2>
        
        <input value={Username} onChange={(event)=> setUserName(event.target.value)} type="text" placeholder="Username" className="bg-gray-800 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition duration-300"/>
        
        <input value={password} onChange={(event)=> setPassword(event.target.value)} type="password" placeholder="Password" className="bg-gray-800 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500 transition duration-300"/>
          <button onClick={handleLogin} className="bg-pink-300 hover:bg-blue-500 text-gray-900 font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg">Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
