import {OrderForm} from "../../components/order/orderForm.jsx";
import {Header} from "../../components/header/header.jsx";
import {Footer} from "../../ui/layout/Footer.jsx";
import {Layout} from "../../ui/layout/Layout.jsx";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {
    const  navigate = useNavigate()
    function goOrder(){navigate('/order') }
    return (
            <Layout>
                <Header />
                <img className={"main-pic"} src={'https://klubmama.ru/uploads/posts/2022-08/thumbs/1661787949_12-klubmama-ru-p-taksi-podelka-foto-15.jpg'}/>
                <button className={'to-order-page'} onClick={goOrder}>Заказать</button>
                <Footer/>
            </Layout>
    )
}