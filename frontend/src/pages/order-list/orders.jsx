import {useEffect, useState} from "react";
import {getAllOrders} from "../../service/order.js";
import {OrderItem} from "../../components/order/orderItem.jsx";
import style from "./order-list.module.css";
import {Header} from "../../components/header/header.jsx";
import {Footer} from "../../ui/layout/Footer.jsx";


export const OrderList = () =>{
    const [ordersList, setOrdersList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        getAllOrders()
            .then((res) => { console.log(res); setOrdersList(res) })
            .catch((error) => { console.log(error); setError('произошла ошибка загрузки списка заказов')  })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return(
        <div className={style.orderContainer}>
            <Header/>
            {loading && <span >Идет загрузка...</span>}
            {error && <h4>{error}</h4>}
            <h1 className={style.orderListTitle}>Список заказов:</h1>
            <div className={style.orderListContainer}>
            {
                ordersList.map((elem, index) => {
                   return(
                       <OrderItem
                           key={index}
                           fio={elem.fio}
                           adressFrom={elem.adress_from}
                           adressTo={elem.adress_to}
                           phone={elem.phone}
                       />
                   )

               })
            }
            
            </div>
            <Footer/>
        </div>
    )


}