export const OrderItem = (props) => {
    return(
        <div className="order-item-container">
            <span className="order-item-fio">Заказчик: {props.fio}</span>
            <span className="order-item-adressfrom">Адрес посадки: {props.adressFrom}</span>
            <span className="order-item-adressto">Адресс прибытия: {props.adressTo}</span>
            <span className="order-item-phone">Номер телефона заказчика: {props.phone}</span>

        </div>
    )
}

