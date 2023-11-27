import React from 'react'
import './SigIn.css'

import { Link } from "react-router-dom";
import './dis.css'
import img_li from './imgs/library main.jpg'
import logo from './imgs/brahimrm-high-resolution-logo-black-transparent.png'
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
export default function Cont() {
const handelSigup =()=>{
  <Link to="/signup"></Link>
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
          <button className='btn1'><FcGoogle/> Sig in with Googlr</button>
          <button className='btn1'><AiFillApple/> Sig in with Apple</button>
          </div>
          <div className='parag'>
            Oo continue with
          </div>
          <div className='btnSin'>
          <input className='input-text'
            type="text" 
            placeholder="Email adress"
            required 
          />
          <div className='ff'></div>
           <input className='input-text'
            type="password" 
            placeholder="Password"
            required 
          />
         
          </div>
          <h5 className='forgot'>Forgot password?</h5>
          <div className='btns'>
          <button className='btn2'>Connect</button>
          </div>
          <div className='btns'>
          <Link to="/signup"> <button className='btn3'>Sig Up</button></Link> 
          </div>
        </div>
      </div>

    </div>
  )
}
