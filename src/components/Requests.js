import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import traderService from "../services/TraderService";
import RequestList from "./RequestLists";

const Requests = () => {
    const [requests, setRequests] = useState(null)

    useEffect(() => {
        traderService.getAllRequests()
            .then((res) => {
                setRequests(res.data)
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })    
    }, [])

    return ( 
        <div className="providers">
            <h3>You can view all your requests here</h3>
            <ToastContainer />
            <RequestList requests={requests}/>
        </div>
     );
}
 
export default Requests;