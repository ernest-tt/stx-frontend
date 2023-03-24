import React, { useState, useEffect } from "react";
import accountService from "../services/AccountsService";

const BankForm = ({show, handleClose, banks}) => {
    const [bankId, setBankId] = useState()
    const [accountNumber, setAccountNumber] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return ( 
        <> 
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
        </>
     );
}
 
export default BankForm;