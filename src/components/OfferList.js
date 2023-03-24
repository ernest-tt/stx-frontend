import React, {useState} from "react";
import Card from 'react-bootstrap/Card';

const OfferList = ({providers, offers, showBuyForm }) => {
    const [providerFilter, setProviderFilter] = useState('')

    return ( 
        <div className="providers">
            <div className="filters">
                <div className="filter" style={{width: '200px'}}>
                    <select onChange={(e) => {setProviderFilter(e.target.value)}}>
                        <option value="">Filter by provider (all)</option>
                        {providers && providers.map((provider) => (
                        <option value={provider.name} key={provider.provider_id}>{provider.name}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="offers">
                {offers && offers.filter((offer) => offer.name.includes(providerFilter))
                    .map((offer) => (
                        <Card className="card" onClick={() => showBuyForm(offer)} key={offer.offer_id}>
                            <Card.Header className="header">{offer.name}</Card.Header>
                                <Card.Body className="card-content">
                                    <span>Currency: <strong>{offer.symbol}</strong></span>
                                    <span>Offer: GHS {offer.selling_price.slice(1)}</span>
                                    {/* <span>BUY: {offer.buying_price}</span> */}
                            </Card.Body>
                        </Card>
                ))}    
            </div>
        </div> 

    );
}
 
export default OfferList;