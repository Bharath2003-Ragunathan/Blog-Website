import  './Register.css'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle"> Register </span>
        <form className="registerForm">
            <label>User Name</label>
            <input type="text" className='registerInput' placeholder='Enter Your User Name' />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter Your E-mail' />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter Your Password...' />
            <button className="registerButton">Register</button>
        </form>
        <button onClick={<Link className= "link" to = "/home"></Link>} className="registerLoginButton">
        <Link className= "link" to = "/login">Login</Link>
        </button>
    </div>
  )
}
