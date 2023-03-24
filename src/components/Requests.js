import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import traderService from "../services/TraderService";
import RequestList from "./RequestLists";

const Requests = () => {
    const [requests, setRequests] = useState(null)
    const [offers, setOffers] = useState(null)
    const [requestOffer, setRequestOffer] = useState(null)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showBuyForm = (body) => {
        handleShow()
        console.log(body)
        setRequestOffer(body)
    }

    // const placeOrder = (body) => {
    //     const { offer_id, provider_id } = requestOffer;
    //     purchaseService.makePurchase({...body, offer_id, provider_id})
    //         .then(() => {
    //             toast.success('Order placed')
    //         })
    //         .catch((err) => {
    //             console.error(err)
    //             toast.error(err.response.data)
    //         })
    //     handleClose()
    //     // console.log({...body, offer_id, provider_id})
    // }

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
            <h1>Providers</h1>
            <ToastContainer />
            <RequestList requests={requests}/>
            {/* <OrderForm show={show} requestOffer={requestOffer} placeOrder={placeOrder} handleClose={handleClose}/> */}
        </div>
     );
}
 
export default Requests;