import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        } else {
            alert("please enter correct details")
        }

    };





    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" value={email} className='iB' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} className='iB' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <button type='button' onClick={handleLogin} className='appButton'>Login</button>
        </div>
    )
}
export default Login;