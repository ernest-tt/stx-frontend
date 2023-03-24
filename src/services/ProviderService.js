import axios from 'axios'

const getProviders = () => {
    return axios.get('http://localhost:5000/providers/all', {withCredentials: true})
        .then((res) => {return res})
        .catch((err) => {throw err})
}

const getAllOffers = () => {
    return axios.get('http://localhost:5000/providers/offers', {withCredentials: true})
        .then((res) => {return res})
        .catch((err) => {throw err})
}


const providerService = {
    getProviders,
    getAllOffers
}

export default providerService