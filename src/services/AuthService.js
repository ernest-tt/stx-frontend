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
            localStorage.setItem('auth', "auth")
            return isAuthenticated()
        })
        .catch((err) => {
            throw err
        })
}

const logout = () => {
    return axios.delete('http://localhost:5000/logout', {withCredentials: true})
    .then(() => { 
        localStorage.removeItem('auth')
    })
    .catch((err) => {
        throw err
    })
}

const isAuthenticated = () => {
    return localStorage.getItem('auth') ? true : false
}


const authService = {
    login,
    signUp,
    logout,
    isAuthenticated
}

export default authService