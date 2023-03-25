import React from "react";
import { useHistory, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from "../services/AuthService";

const Navbar = () => {
    const history = useHistory()

    const handleLogout = () => {
        authService.logout()
            .then(() => {
                history.push('/')
            })
            .catch((err) => {
                console.error(err)
                toast.error('Failed to logout')
            })
    }

    return ( 
        <div className="navbar-container">
            <ToastContainer />
            <header className="navbar">
                <span className="title"><Link to="/dashboard" className="title">FX Home</Link></span>
                <ul className="navs">
                    <li><Link to="/dashboard" className="nav-link">Buy FX</Link></li>
                    <li><Link to="/dashboard/requests" className="nav-link">View Requests</Link></li>
                    <li><Link to="/dashboard/accounts" className="nav-link">Accounts</Link></li>                  
                    <li className="nav-link" onClick={handleLogout}>Logout</li>
                </ul>
            </header>
        </div>

     );
}
 
export default Navbar;