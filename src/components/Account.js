import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Accounts = () => {
    const [accountNumber, SetAccountNumber] = useState()
    const [banks, setBanks] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <div>
            <Button variant="primary" onClick={handleShow}>Add Bank Details</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Buy FX</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <form className="buyForm">
                        {/* <select value={accountId} onChange={(e) => setAccountId(e.target.value)}>
                            <option value=''>Select your bank</option>
                            {accounts && accounts.map((account) => (
                                <option key={account.account_id} value={account.account_id}>{account.bank_name}</option>
                            ))}
                        </select> */}
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