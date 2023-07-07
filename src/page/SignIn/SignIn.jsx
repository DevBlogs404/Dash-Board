import React from "react";
import "./signin.scss";
import {Google, GitHub} from '@mui/icons-material'
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [mail, setMail] = React.useState("testUser@gmail.com")
  const [pass, setPass] = React.useState("test123")

const handleSubmit = ()=>{
  if(mail && pass){
    navigate('/home')
  }
}

  return (
    <div className="signin-container">
      <div className="signin-section1">
        <h1 className="logo">Board.</h1>
      </div>
      <div className="signin-section2">
        <div className="signin-content">
          <h2 className="signin-heading">Sign In</h2>
          <h4 className="signin-subheading">Sign into your account</h4>
          <div className="signin-buttons">
            <button className="signin-button signin-google"><Google fontSize="20" />Sign In with Google</button>
            <button className="signin-button signin-apple"><GitHub fontSize="20" color="#999999" />Sign In with Github</button>
          </div>
          <form className="signin-form">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="johndoe@gmail.com"  required value={mail} onChange={(e)=>setMail(e.target.value.trim())}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" required minLength={8} maxLength={16} value={pass} onChange={(e)=>setPass(e.target.value.trim())} />
            <Link href="#" className="forgot-password">Forgot Password?</Link>
            <button type="submit" className="signin-submit" onClick={handleSubmit}>Sign In</button>
          </form>
          <p className="register-text">Don't have an account? <Link to='#'>Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
