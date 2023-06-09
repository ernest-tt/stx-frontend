import React, { useState} from "react";
import accountService from "../services/AccountsService";
import { ToastContainer, toast } from 'react-toastify';

const BankForm = ({show, handleClose, banks}) => {
    const [bankId, setBankId] = useState()
    const [accountNumber, setAccountNumber] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!bankId || !accountNumber) {
            toast.error("All fields are required")
        } else {
            accountService.addBankDetails({bankId, accountNumber})
            .then(() => {
                handleClose()
                window.location.reload()
            })
            .catch((err) => {
                console.error(err)
                toast.error(err.response.data)
            })
        }
    }

    return ( 
        <> 
            <ToastContainer />
            <div className="modal">
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
        </>
     );
}
 
export default BankForm;