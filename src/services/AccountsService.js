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


const accountService = {
    getAccounts
}

export default accountService