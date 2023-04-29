import axios from "axios";

export async function authUser(email, password) {
    const response = await axios('http://localhost:5000/authorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: JSON.stringify({ email, password })
    }).then( (res) => {  return  res.data })
    return response
}

export async function registrateUser(email, login, password) {
    const response = await axios('http://localhost:5000/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: JSON.stringify({ email, login, password })
    }).then(  (res) => {  return  res.data })
    return response
}

export async function authWithCookie(){
    const response = await axios('http://localhost:5000/authCookie', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }).then((res) =>{ return res.data} )
    return response
}