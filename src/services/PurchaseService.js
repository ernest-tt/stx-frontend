import axios from 'axios'

const makePurchase = (body) => {
    return axios.post('http://localhost:5000/purchase/create-request',{...body}, {withCredentials: true})
        .then((res) => {return res})
        .catch((err) => {throw err})
}


const purchaseService = {
    makePurchase,
}

export default purchaseService