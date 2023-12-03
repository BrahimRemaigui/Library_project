import { Link } from "react-router-dom";
import im  from './imgs/menu_open_FILL0_wght400_GRAD0_opsz24.png'
import { BiAlignRight } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import logo from './imgs/brahimrm-logo-black.png'
import './Nav.css'
import { useState } from "react";
const NavBar = () => {
    const[classAdd,setClassAdd]=useState(null)
    const[isLiked,setIsLiked]=useState(true)
    const[isserch,setIssearch]=useState(false)
    const{varia,setVaria}=useState('')
    const handleClick=()=>{
    }
const changetrue =()=>{
    setIsLiked(false)
}
const changefalse =()=>{
    setIsLiked(true)
}
const changeSearch=()=>{
    setIssearch(!isserch)

}
    return ( 
        
        <nav className="navbar">
        <div className="nav-container">
            
        <Link to="/"> <img className="logo-bra" src={logo}></img> </Link>       
        <BiAlignRight className={`bialifn ${classAdd}`} onClick={changetrue}  />
            <ul className={`nav ${isLiked ? "nav-menu" : "menu-hover"}`} onMouseLeave={changefalse}>
               <Link to="/"> <li className="nav-item"><a>Home</a> </li> </Link>
               <Link to="/librery"> <li className="nav-item"><a>Blogs</a></li> </Link>
               <Link to="/Creat"><li className="nav-item"><a>New</a></li></Link>
               <Link to="/contact"><li className="nav-item"><a>Log In</a></li></Link>   
               <FaSearch className="search" onClick={changeSearch}/>
                 { isserch&& <input type="search" className="inpute-search"/>}
            </ul>
       
        </div>
    </nav>
     );
}
 
export default NavBar;