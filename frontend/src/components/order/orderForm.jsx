import   './style.css';
import {useState} from "react";
import {createOrder} from "../../service/order.js";
export const OrderForm = () => {
    const [userName, setUserName] = useState('')
    const [adressFrom, setAdressFrom] = useState('')
    const [adressTo, setAdressTo] = useState('')
    const [userPhone, setUserPhone] = useState('')
    async function sendOrder(){
        const response = await createOrder(userName, adressFrom, adressTo, userPhone)
            .then((res) =>{
                console.log(res)})
            .catch((error) =>{
                console.log(error)})
    }

    return (
            <div className="order-form">
                <h4 className="order-form-title">Оформление заказа</h4>
                <input type="text" className="order-user-name"
                       onChange={(e) => setUserName(e.target.value)} placeholder="ФИО"/>
                <input type="text" className="order-adress-from"
                        onChange={(e)=>setAdressFrom(e.target.value)} placeholder="Откуда поедем"/>
                <input type="text" className="order-adress-to"
                        onChange={(e) =>setAdressTo(e.target.value)} placeholder="Куда поедем"/>
                <input type="phone" className="order-user-phone"
                        onChange={(e) =>setUserPhone(e.target.value)} placeholder="Номер телефона"/>
                <button className="send-order"
                        onClick={sendOrder}>
                    Заказать</button>
            </div>
    )
}

