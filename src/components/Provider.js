import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import providerService from "../services/ProviderService";
import purchaseService from "../services/PurchaseService";
import OrderForm from "./OrderForm";
import OfferList from "./OfferList";

const Provider = () => {
    const [providers, setProviders] = useState(null)
    const [offers, setOffers] = useState(null)
    const [requestOffer, setRequestOffer] = useState(null)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showBuyForm = (body) => {
        handleShow()
        setRequestOffer(body)
    }

    const placeOrder = (body) => {
        const { offer_id, provider_id } = requestOffer;
        const { amount, accountId } = body
        purchaseService.makePurchase({
                amount: parseFloat(amount),
                offerId: offer_id,
                providerId: provider_id,
                accountId: accountId
            })
            .then((res) => {
                console.log(res)
                toast.success('Order placed')
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })
        handleClose()
        // console.log({...body, offer_id, provider_id})
    }

    useEffect(() => {
        providerService.getProviders()
            .then((res) => {
                setProviders(res.data)
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })

        providerService.getAllOffers()
            .then((res) => {
                setOffers(res.data)
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })       
    }, [])

    return ( 
        <div className="providers">
            <h3>Click on a provider to buy</h3>
            <ToastContainer />
            <OfferList providers={providers} showBuyForm={showBuyForm} offers={offers} />
            {show && <OrderForm show={show} requestOffer={requestOffer} placeOrder={placeOrder} handleClose={handleClose}/>}
        </div>
     );
}
 
export default Provider;