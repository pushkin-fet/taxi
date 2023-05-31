import './style.css'
import logo from './../../assets/logo2.jpg'
import { AuthButton } from '../authButton/authButton'
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const  navigate = useNavigate()
    function goOrder(){navigate('/order') }
    function goOrderList(){navigate('/orders-list') }

    function goHome(){navigate('/') }

    return (
        <header className="header">

            <img src={logo} alt="" className="logo" onClick={goHome} />
            <nav className='header_nav'>

                <button className={'header-button'} onClick={goOrderList}>Список заказов</button>

                <button className={'header-button'} onClick={goOrder}>Заказать</button>
            </nav>
           <AuthButton/>

        </header>
    )
}