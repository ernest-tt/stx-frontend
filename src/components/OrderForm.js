import React, { useState, useEffect } from "react";
import accountService from "../services/AccountsService";

const OrderForm = ({show, handleClose, requestOffer, placeOrder}) => {
    const [accounts, setAccounts] = useState([])
    const [amount, setAmount] = useState(null);
    const [accountId, setAccountId] = useState(null)


    useEffect(() => {
        accountService.getAccounts()
            .then((res) => {setAccounts(res.data)})
    }, [])


    return ( 
        <>
            <div className="modal" show={show} onHide={handleClose}>
                    <form className="buyForm">
                        <h2 className="title">ORDER FROM</h2>
                        <div className="stats">
                            <h3>Provider: {requestOffer && requestOffer.name}</h3>
                            <p>Offer Price: <strong>{requestOffer && requestOffer.selling_price.slice(1)}</strong></p>
                            <p>Currency: <strong>{requestOffer && requestOffer.symbol}</strong></p>
                        </div>
                        <label>Amount</label>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)}type="number"/>
                        <select value={accountId} onChange={(e) => setAccountId(e.target.value)}>
                            <option value=''>Select your bank</option>
                            {accounts && accounts.map((account) => (
                                <option key={account.account_id} value={account.account_id}>
                                    {account.bank_name} -- {account.account_number}
                                </option>
                            ))}
                        </select>
                        <button type="button" className="cta" onClick={() => placeOrder({amount, accountId})}>
                            Buy
                        </button>
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </form>
            </div>
        </>
     );
}
 
export default OrderForm;