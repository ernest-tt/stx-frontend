import React, {useState} from "react";
import Card from 'react-bootstrap/Card';

const RequestList = ({requests}) => {
    const [requestFilter, setRequestFilter] = useState('')

    return ( 
        <div className="providers">
            <div className="filters">
                <div className="filter" style={{width: '200px'}}>
                    <select onChange={(e) => {setRequestFilter(e.target.value)}}>
                        <option value="">Filter by provider</option>
                        {requests && requests.map((request) => (
                        <option value={request.name} key={request.request_id}>{request.name}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="requests">
                {(requests && requests.length === 0) && <span className="danger"><strong>No requests found</strong></span>}
                {requests && requests.filter((request) => request.name.includes(requestFilter))
                    .map((request) => (
                        <Card className="card" key={request.request_id}>
                            <Card.Header className="header">{request.name}</Card.Header>
                                <Card.Body className="card-content">
                                    <span>Currency: <strong>{request.symbol}</strong></span>
                                    <span>Purchase amount: <strong>GHS {request.amount.slice(1)}</strong></span>
                                    <span>{request.date}</span>
                                    <span className={request.status.toLowerCase()}>Status: <strong>{request.status}</strong></span>
                                    <span>Pay to: <strong>{request.bank_name}</strong></span>
                                    {/* <span>BUY: {offer.buying_price}</span> */}
                            </Card.Body>
                        </Card>
                ))}    
            </div>
        </div> 

    );
}
 
export default RequestList;