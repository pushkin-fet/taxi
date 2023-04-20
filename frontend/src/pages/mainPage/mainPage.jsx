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
                <button className={'to-order-page'} onClick={goOrder}>Заказать</button>
                <Footer/>
            </Layout>
    )
}