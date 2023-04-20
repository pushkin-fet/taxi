import {OrderForm} from "../../components/order/orderForm.jsx";
import {Layout} from "../../ui/layout/Layout.jsx";
import {Header} from "../../components/header/header.jsx";
import {Footer} from "../../ui/layout/Footer.jsx";

export const OrderPage = () =>{
    return(
            <Layout>
            <Header/>
            <OrderForm/>
            <Footer/>
            </Layout>
    )
}