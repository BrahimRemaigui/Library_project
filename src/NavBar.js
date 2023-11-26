import { Link } from "react-router-dom";
import im  from './imgs/menu_open_FILL0_wght400_GRAD0_opsz24.png'
import { BiAlignRight } from "react-icons/bi";
import './Nav.css'
import { useState } from "react";
const NavBar = () => {
    const[classAdd,setClassAdd]=useState(null)
    const[isLiked,setIsLiked]=useState(true)
    const{varia,setVaria}=useState('')
    const handleClick=()=>{
    }
const changetrue =()=>{
    setIsLiked(false)
}
const changefalse =()=>{
    setIsLiked(true)
}
    return ( 
        
        <nav className="navbar">
        <div className="nav-container">
            
        <Link to="/"> <a href="#" className="nav-logo">BRLeb</a> </Link>       
        <BiAlignRight className={`bialifn ${classAdd}`} onClick={changetrue}  />
            <ul className={`nav ${isLiked ? "nav-menu" : "menu-hover"}`} onMouseLeave={changefalse}>
               <Link to="/"> <li className="nav-ite"><a>Home</a> </li> </Link>
               <Link to="/librery"> <li className="nav-item"><a>Blogs</a></li> </Link>
               <Link to="/Creat"><li className="nav-item"><a>New</a></li></Link>
               <Link to="/contact"><li className="nav-item"><a>Log In</a></li></Link>
               
            </ul>
        </div>
    </nav>
     );
}
 
export default NavBar;