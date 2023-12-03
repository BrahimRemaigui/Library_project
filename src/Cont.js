import React, { useState } from 'react'
import './SigIn.css'
import useFetch from "./useFetch";

import { Link } from "react-router-dom";
import './dis.css'
import img_li from './imgs/hard.jpg'
import logo from './imgs/brahimrm-logo-black.png'
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Cont() {
  const history =useHistory();
  const {data,isPending,error}=useFetch('http://localhost:8000/users')
  const[userName,setUserName]=useState();
  const[passw,setPassw]=useState();
  const[LinkVar,setLinkVar]=useState(null)
const handelSigup =()=>{
  <Link to="/signup"></Link>
}

const handConnect=()=>{
  console.log(data)
  if(data.find(dat=> dat.email===userName&&dat.password===passw)){
   console.log("passed")
   history.push("/signup")
  }
  else{
    console.log("no")
     
  }
}

  return (
    <div className='sign-in'>
      <div className='forme_si'>
        
        <div className='fo-log'>
        <img className='img_form' src={img_li}></img>
        </div>
        <div className='creat_log'>
        <img className='logo-bra' src={logo}></img>
          <h2>Sign in to your account</h2>
          <div className='btns'>
          <button className='btn1'><FcGoogle/> Sig in with Google</button>
          <button className='btn1'><AiFillApple/> Sig in with Apple</button>
          </div>
          <div className='parag'>
            Or continue with
          </div>
          <div className='btnSin'>
          <input className='input-text'
            type="text" 
            placeholder="Email adress"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required 
          />
          <div className='ff'></div>
           <input className='input-text'
            type="password" 
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
            placeholder="Password"
            required 
          />
         
          </div>
          <h5 className='forgot'>Forgot password?</h5>
          <div className='btns'>
          <button onClick={handConnect} className='btn2'>Continue</button>
          </div>
          <div className='btns'>
          <Link to="/signup"> <button className='btn3'>Sig Up</button></Link> 
          </div>
        </div>
      </div>

    </div>
  )
}
