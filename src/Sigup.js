import './SignUp.css'
import './SigIn.css'
import logo from './imgs/brahimrm-high-resolution-logo-black-transparent.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Sigup = () => {
    return (
        <>
            <div className='sign-Up'>
                <div className='forme_siUp'>
                    <img className='logo-bra' src={logo}></img>
                    <div className='witing'>
                    <h2>Welcom in Brahim Library</h2>
                    <p>Create an account or {<Link to='/contact'>Loge in</Link>}</p>
                    </div>
                    <div className='name_full'>
                        <input className='name'
                            type="text"
                            placeholder="First Name"
                            required  ></input>
                        <input className='name'
                            type="text"
                            placeholder="Last Name"
                            required  ></input>
                    </div>
                    <input className='email'
                        type="text"
                        placeholder="Email adress"
                        required  ></input>
                    <div className='name_full'>
                        <input className='name'
                            type="password"
                            placeholder="pasword"
                            required  ></input>
                        <input className='name'
                            type="Password"
                            placeholder="Comferm pqssword"
                            required  ></input>
                    </div>
                    <div className='condition'>
                        <input type="checkbox" />
                        <p> I accept all conditions of this website </p>
                    </div>
                    <button className='btnSinup'>Sign Up</button>
                </div>
            </div>
        </>
    );
}

export default Sigup;