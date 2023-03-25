import React, { useState } from "react";
import { Link , useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from "../services/AuthService";

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        authService.signUp({fullName, email, password})
            .then((res) => {
                console.log('in response')
                history.push({pathname: "/",  state: {data: res.data}})
            })
            .catch((err) => {
                console.error('error', err.response)
                toast.error(err.response)
            })
    }

    return (
        <>
            <h1 className="welcome">FX HOME</h1>
            <div className="signup">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}/>
                    <label>Email Address</label>
                    <input type="email" required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <button className="button cta" type="submit">Sign Up</button>
                    <span>Have an account? <Link to="/">Click here</Link> to log in</span>
                </form>
                <ToastContainer />
            </div>        
        </>

     );
}
 
export default SignUp;