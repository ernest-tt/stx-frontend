import React, { useState} from "react";
import accountService from "../services/AccountsService";
import { ToastContainer, toast } from 'react-toastify';

const BankForm = ({show, handleClose, banks}) => {
    const [bankId, setBankId] = useState()
    const [accountNumber, setAccountNumber] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        accountService.addBankDetails({bankId, accountNumber})
        .then(() => {
            handleClose()
            window.location.reload()
        })
        .catch((err) => {
            console.error(err)
            toast.error('Failed to save bank details')
        })
    }

    return ( 
        <> 
            <ToastContainer />
            <div className="bank-form">
                <div clasName="modal" show={show} onHide={handleClose}>
                    <form className="buyForm" onSubmit={handleSubmit}>
                        <h2 className="title">BANK DETAILS</h2>
                        <select value={bankId} onChange={(e) => setBankId(e.target.value)}>
                            <option value=''>Select your bank</option>
                            {banks && banks.map((bank) => (
                                <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                            ))}
                        </select>
                        <label>Account Number</label>
                        <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)}type="number"/>
                        <button type="submit" className="cta">Save</button>                                
                        <button type="button" onClick={handleClose}>Cancel</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default BankForm;