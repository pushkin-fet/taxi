import axios from "axios";

export async function createOrder(fio, adressFrom, adressTo, phone){
    const response = await axios('http://localhost:5000/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: JSON.stringify({ fio, adressFrom, adressTo, phone })
    })
        .then((res) =>{return res.data})
    return response
}

export async function getAllOrders(){
    const response = await axios('http://localhost:5000/get-all-orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
        .then((res) => { return res.data } )
    return response
}