import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import accountService from "../services/AccountsService";
import BankForm from "./BankForm";

const Accounts = () => {
    const [banks, setBanks] = useState()
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
            <div className="details">
                {balanceInfo && balanceInfo.map((info) => (
                    <div key={info.trader_balance_id}>
                        <h3>Platform Balance : <strong>{info.symbol} {info.amount.slice(1)}</strong></h3>
                    </div>
                ))}
                <button className="cta" onClick={handleShow}>Add Bank Details</button>
            </div>
            <div className="banks">
                <h2>Your Bank Accounts</h2>
                <div className="banks-container">
                    { accounts && accounts.map((account) => (
                        <div className="bank-stat" key={account.account_id}>
                            <p><strong>{account.bank_name}</strong></p>
                            <p>Acc No: <strong>{account.account_number}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
            {show && <BankForm show={show} banks={banks} handleClose={handleClose}/>}
        </div>
     );
}
 
export default Accounts;