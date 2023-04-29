import axios from "axios";

export async function createOrder(fio, adressFrom, adressTo, phone){
    const response = await axios('https://localhost:5000/order', {
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