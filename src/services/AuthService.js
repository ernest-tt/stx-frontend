import axios from "axios";

const signUp = (body) => {
    return axios.post('http://localhost:5000/trader/register', {...body})
        .then((res) => {
            return res
        })
        .catch((err) => {
            throw err
        })
}

const login = (body) => {
    return axios.post('http://localhost:5000/trader/login', {...body})
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