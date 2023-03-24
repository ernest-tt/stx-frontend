import axios from "axios";

const getAccounts = () => {
    return axios.get('http://localhost:5000/accounts/banks', {withCredentials: true})
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

const getAvailableBanks = () => {
    return axios.get('http://localhost:5000/accounts/all-banks', {withCredentials: true})
    .then((res) => {
        return res
    })
    .catch((err) => {
        throw err
    }) 
}

const getUserBalanceInfo = () => {
    return axios.get('http://localhost:5000/accounts/platform-balances', {withCredentials: true})
    .then((res) => {
        return res
    })
    .catch((err) => {
        throw err
    })    
}


const accountService = {
    getAccounts,
    getAvailableBanks,
    getUserBalanceInfo
}

export default accountService