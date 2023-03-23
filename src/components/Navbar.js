import React from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const history = useHistory()

    const handleLogout = () => {
        axios.delete('http://localhost:5000/logout')
            .then((res) => {
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
                <span className="title">FX Home</span>
                <ul className="links">
                    <li>Providers</li>
                    <li>Requests</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </header>
        </div>

     );
}
 
export default Navbar;