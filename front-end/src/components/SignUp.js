import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";




const SignUp =()=>{
    
    const [ name, setName]= useState("");
    const [ email, setEmail]= useState("");
    const [ password, setPassword]= useState("");
    const navigate=  useNavigate();
   
    useEffect(()=>{
        const auth = localStorage.getItem('user')
    },[])
    
    
    const collectData= async()=>{
        console.warn(name, email, password)
        let result=await fetch("http://localhost:5000/register",{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers: {
                'content-type':'application/json'
            }});
            result=await result.json();
            console.warn(result);
            localStorage.setItem("user" , JSON.stringify(result) );
            navigate('/');
    }
    
    return( 

        <div className="register">
            <h1>Register</h1>
            <input type="text" className="iB" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" className="iB" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="iB" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={collectData} className="appButton" type="button"> Sign Up</button>
           
        </div>
    )
}

export default SignUp;