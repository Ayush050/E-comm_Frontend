import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => { 

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
          const navigate=useNavigate();                                           // it is used to navigate to the other page 
           useEffect(()=>{
          const auth=localStorage.getItem('user');              // it is used to check the user is logged in or not 
          if(auth){
                navigate('/');
          } 
          
        },[]);
    const handleLogin=async()=>{
        let result=await fetch("http://localhost:5000/login",{        // here it is used to send the data to the backend and this data is fetching from the frontend
            method:'POST', 
            body:JSON.stringify({email,password}),
            headers:{  
                "Content-Type":"application/json",
                },
           });
           result=await result.json();                       // here it is used to convert the data into json format
           console.log(result);  
           if(result.email){
            localStorage.setItem('user', JSON.stringify(result));      // here it is used to store the data in the local storage
            navigate('/');                                             // here it is used to navigate to the home page
           }
           else {
                alert("please enter correct email");
           }

        console.log(email,password);
    }
    return ( 
         
        <div className='login'>
            <h1>Login</h1>
            <input type="text" className='inputBox' placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
            <input type="password" className='inputBox' placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password}/> 
            <button onClick={handleLogin} className='appButton' type='button'>Login</button>
        </div>
    )
};

export default Login;
