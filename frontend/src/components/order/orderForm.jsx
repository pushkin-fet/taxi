import   './style.css';
import {useState} from "react";
export const OrderForm = () => {
    const [userName, setUserName] = useState('')
    const [adressFrom, setAdressFrom] = useState('')
    const [adressTo, setAdressTo] = useState('')
    const [userPhone, setUserPhone] = useState('')
    function sendOrder(){
        console.log(userName)
        console.log(adressFrom)
        console.log(adressTo)
        console.log(userPhone)
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

