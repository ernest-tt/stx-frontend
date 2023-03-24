import React from "react";
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const history = useHistory()

    const handleLogout = () => {
        axios.delete('http://localhost:5000/logout', {withCredentials: true})
            .then((res) => {
                history.push('/')
            })
            .catch((err) => {
                console.error(err)
                toast.error('Failed to logout')
            })
    }

    return ( 
        <div className="links">
            <ToastContainer />
            <header className="navbar">
                <span className="title">FX Home</span>
                <ul className="links">
                    <li><Link to="/dashboard">Buy FX</Link></li>
                    <li><Link to="/dashboard/requests">View Requests</Link></li>
                    <li><Link to="/dashboard/accounts">Accounts</Link></li>                  
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </header>
        </div>

     );
}
 
export default Navbar;