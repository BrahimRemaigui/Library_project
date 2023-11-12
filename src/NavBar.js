import { Link } from "react-router-dom";
const NavBar = () => {
    const handleClick=()=>{

    }
    return ( 
        
        <nav className="navbar">
        <div className="nav-container">
        <Link to="/"> <a href="#" className="nav-logo">BRLeb</a> </Link>       
            <ul className="nav-menu">
               <Link to="/"> <li className="nav-item"><a>Home</a></li> </Link>
               <Link to="/librery"> <li className="nav-item"><a>Blogs</a></li> </Link>
               <Link to="/Creat"><li className="nav-item"><a>New</a></li></Link>
               <Link to="/contact"><li className="nav-item"><a>Contact</a></li></Link>
            </ul>
        </div>
    </nav>
     );
}
 
export default NavBar;