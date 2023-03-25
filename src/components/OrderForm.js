import React, { useState, useEffect } from "react";
import accountService from "../services/AccountsService";
import { ToastContainer, toast } from 'react-toastify';

const OrderForm = ({show, handleClose, requestOffer, placeOrder}) => {
    const [accounts, setAccounts] = useState([])
    const [amount, setAmount] = useState(null);
    const [accountId, setAccountId] = useState(null)
    const [balance, setBalance] = useState()

    useEffect(() => {
        accountService.getAccounts()
            .then((res) => {setAccounts(res.data)})
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })

        accountService.getUserBalanceInfo()
            .then((res) => {
                setBalance(res.data[0])
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })
    }, [])


    return ( 
        <>
            <ToastContainer />
            <div className="modal">
                    <form className="buyForm">
                        <h2 className="title">ORDER FORM</h2>
                        <div className="stats">
                            <h3>Provider: {requestOffer && requestOffer.name}</h3>
                            <p>Offer Price: <strong>{requestOffer && requestOffer.selling_price.slice(1)}</strong></p>
                            <p>Currency: <strong>{requestOffer && requestOffer.symbol}</strong></p>
                        </div>
                        <label>Amount</label>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" 
                            required/>
                        <select value={accountId} onChange={(e) => setAccountId(e.target.value)} required>
                            <option value=''>Select your bank</option>
                            {accounts && accounts.map((account) => (
                                <option key={account.account_id} value={account.account_id}>
                                    {account.bank_name} -- {account.account_number}
                                </option>
                            ))}
                        </select>
                        <button type="button" className="cta" onClick={() => {
                            if (parseFloat(amount) > parseFloat(balance.amount.slice(1).replaceAll(',',''))) {
                                toast.error("Not enough balance")
                            } else if (!accountId) {
                                toast.error("All fields required")
                            } else {
                                placeOrder({amount, accountId})
                            }
                        }}>Buy</button>
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </form>
            </div>
        </>
     );
}
 
export default OrderForm;