import axios from 'axios'

const getAllRequests = () => {
    return axios.get('http://localhost:5000/purchase/all', {withCredentials: true})
        .then((res) => {return res})
        .catch((err) => {throw err})
}


const traderService = {
    getAllRequests
}

export default traderService