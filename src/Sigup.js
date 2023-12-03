import './SignUp.css'
import './SigIn.css'
import logo from './imgs/brahimrm-logo-black.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
export default function SignUp() {
    const history=useHistory()
    const[firstName,setfirstName]=useState(null)
    const[lastName,setlastaName]=useState(null)
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)
    const hanlSubmit =()=>{
        const blog ={email,password,firstName,lastName};
        fetch('http://localhost:8000/users/',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
             history.push('/');
          })
    }
    return (
        <>
            <div className='sign-Up'>
                <div className='forme_siUp'>
                    <img className='logo-bra' src={logo}></img>
                    <div className='witing'>
                    <h2>Welcom in Brahim Library</h2>
                    <p>Create an account or {<Link to='/contact'>Loge in</Link>}</p>
                    </div>
                    <form onSubmit={hanlSubmit}>
                    <div className='name_full'>
                        <input className='name'
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            required  ></input>
                        <input className='name'
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setlastaName(e.target.value)}
                            required  ></input>
                    </div>
                    <input className='email'
                        type="text"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required  ></input>
                    <div className='name_full'>
                        <input className='name'
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required  ></input>
                        <input className='name'
                            type="Password"
                            placeholder="Confirm password"
                           // onChange={handlCon}
                            required  ></input>
                    </div>
                    <div className='condition'>
                        <input type="checkbox" />
                        <p> I accept all conditions of this website </p>
                    </div>
                    <button className='btnSinup'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}
