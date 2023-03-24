import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import accountService from "../services/AccountsService";

const Accounts = () => {
    const [accountNumber, SetAccountNumber] = useState()
    const [banks, setBanks] = useState()
    const [bankId, setBankId] = useState()
    const [balanceInfo, setBalanceInfo] = useState()
    const [accounts, setAccounts] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        accountService.getAvailableBanks()
        .then((res) => {
            setBanks(res.data)
        })
        .catch((err) => {
            console.error(err)
            toast.error(err.response.data)
        })

        accountService.getUserBalanceInfo()
        .then((res) => {
            setBalanceInfo(res.data)
        })
        .catch((err) => {
            console.error(err)
            toast.error(err.response.data)
        })

        accountService.getAccounts()
            .then((res) => {
                setAccounts(res.data)
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })       
    }, [])

    return ( 
        <div className="accounts">
            <div>
                {balanceInfo && balanceInfo.map((info) => (
                    <div key={info.trader_balance_id}>
                        <h3>{info.symbol}</h3>
                        <p>{info.amount}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Your Bank Accounts</h2>
                { accounts && accounts.map((account) => (
                    <div key={account.account_id}>
                        <p>{account.bank_name}</p>
                        <p>{account.account_number}</p>
                    </div>
                ))}
            </div>
            <Button variant="primary" onClick={handleShow}>Add Bank Details</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Buy FX</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <form className="buyForm">
                        <select value={bankId} onChange={(e) => setBankId(e.target.value)}>
                            <option value=''>Select your bank</option>
                            {banks && banks.map((bank) => (
                                <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                            ))}
                        </select>
                        <label>Account Number</label>
                        <input value={accountNumber} onChange={(e) => SetAccountNumber(e.target.value)}type="number"/>
                    </form>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary">
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default Accounts;