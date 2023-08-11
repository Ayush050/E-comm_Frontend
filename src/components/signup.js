// signup.js
import React, {useState, useEffect}from 'react'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const navigate=useNavigate();                                           // it is used to navigate to the other page 
     
    useEffect(()=>{
      const auth=JSON.parse(localStorage.getItem('user'));              // here it is used to check the user is logged in or not
      if(auth){                                                          // if user is logged in then it will show the page otherwise it will navigate to the signup page
          navigate('/');
      }
  }); 

    const collectData = async () => { 
         console.log(name, email, password); 
        let result=await fetch("http://localhost:5000/register",{        // here it is used to send the data to the backend and this data is fetching from the frontend
            method:'POST', 
            body:JSON.stringify({name,email,password}),
            headers:{  
                "Content-Type":"application/json",
                },
           });
           result=await result.json();
            console.log(result); 
            localStorage.setItem('user',JSON.stringify(result));      // here it is used to store the data in the local storage
             navigate('/');                                             // here it is used to navigate to the home page
         
    }

  return (
    <div className='signup'>
      <h1>Register</h1> 
      <input className="inputBox" type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
      <input className="inputBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email" />
      <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your password" /> 
      <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
    </div>
  );
} 

export default Signup;
