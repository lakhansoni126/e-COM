import React, {useState} from "react";

const SignUp =()=>{
    
    const [ Name, setName]= useState("");
    const [ Email, setEmail]= useState("");
    const [ Password, setPassword]= useState("");
    const collectData=()=>{console.warn(Name, Email, Password)};
    
    return( 

        <div className="register">
            <h1>Register</h1>
            <input type="text" className="iB" placeholder="Enter Name" value={Name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" className="iB" placeholder="Enter Email" value={Name} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="iB" placeholder="Enter Password" value={Name} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={collectData} className="appButton" type="button"> Sign Up</button>
            <li></li>
        </div>
    )
}

export default SignUp;