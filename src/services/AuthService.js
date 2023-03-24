import axios from "axios";

const signUp = (body) => {
    return axios.post('http://localhost:5000/trader/register', {...body}, {withCredentials: true})
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

const login = (body) => {
    return axios.post('http://localhost:5000/trader/login', {...body}, {withCredentials: true})
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

const authService = {
    login,
    signUp
}

export default authService