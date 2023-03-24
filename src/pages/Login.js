import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from '../services/AuthService'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (history.location.state){
            setEmail(history.location.state.data.email);
        } else {
            return
        }
    }, [history])

    const handleSubmit = (e) => {
        e.preventDefault()
        authService.login({email, password})
            .then(() => history.push('/dashboard'))
            .catch((err)  => {
                console.error(err)
                if (err.response.status === 401){
                    toast.error('Invalid credentials')
                } else {
                    toast.error(err.response.data)
                }
            })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email Address</label>
                <input type="email" required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button className="button cta" type="submit">Log in</button>
                <span>Don't have an account? <Link to="/sign-up">Click here</Link> to sign up</span>
            </form>
            <ToastContainer />
        </div>
    );
}
 
export default LoginPage;