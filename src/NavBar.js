import { Link } from "react-router-dom";
import im  from './imgs/menu_open_FILL0_wght400_GRAD0_opsz24.png'
import { BiAlignRight } from "react-icons/bi";
import './Nav.css'
const NavBar = () => {
    const handleClick=()=>{

    }
    return ( 
        
        <nav className="navbar">
        <div className="nav-container">
        <Link to="/"> <a href="#" className="nav-logo">BRLeb</a> </Link>       
        <BiAlignRight className="bialifn"/>
            <ul className="nav-menu">
               <Link to="/"> <li className="nav-item"><a>Home</a></li> </Link>
               <Link to="/librery"> <li className="nav-item"><a>Blogs</a></li> </Link>
               <Link to="/Creat"><li className="nav-item"><a>New</a></li></Link>
               <Link to="/contact"><li className="nav-item"><a>Log In</a></li></Link>
               
            </ul>
        </div>
    </nav>
     );
}
 
export default NavBar;