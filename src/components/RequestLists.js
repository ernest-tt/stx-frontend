import React, {useState} from "react";
import Card from 'react-bootstrap/Card';

const RequestList = ({requests}) => {
    const [requestFilter, setRequestFilter] = useState('')

    return ( 
        <div className="requests">
            <div className="filters">
                <div className="request-filter" style={{width: '200px'}}>
                    <select onChange={(e) => {setRequestFilter(e.target.value)}}>
                        <option value="">All</option>
                        {requests && requests.map((request) => (
                        <option value={request.name} key={request.request_id}>{request.name}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="requests">
                {requests && requests.filter((request) => request.name.includes(requestFilter))
                    .map((request) => (
                        <Card className="offer-card" key={request.request_id}>
                            <Card.Header>{request.name}</Card.Header>
                                <Card.Body className="card-content">
                                    <span>{request.symbol}</span>
                                    <span>{request.amount}</span>
                                    <span>{request.date}</span>
                                    <span>Status: {request.status}</span>
                                    <span>Pay to: {request.bank_name}</span>
                                    {/* <span>BUY: {offer.buying_price}</span> */}
                            </Card.Body>
                        </Card>
                ))}    
            </div>
        </div> 

    );
}
 
export default RequestList;