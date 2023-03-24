import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Buy FX</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <form className="buyForm">
                        <div>
                            <h3>{requestOffer && requestOffer.name}</h3>
                            <p>{requestOffer && requestOffer.selling_price}</p>
                            <p>{requestOffer && requestOffer.symbol}</p>
                        </div>
                        <label>Amount</label>
                        <input value={amount} onChange={(e) => setAmount(e.target.value)}type="number"/>
                        <select value={accountId} onChange={(e) => setAccountId(e.target.value)}>
                            <option value=''>Select your bank</option>
                            {accounts && accounts.map((account) => (
                                <option key={account.account_id} value={account.account_id}>{account.bank_name}</option>
                            ))}
                        </select>
                    </form>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => placeOrder({
                    amount, accountId
                })}>
                    Buy
                </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default OrderForm;