import './style.css'
import logo from './../../assets/logo2.jpg'
import { AuthButton } from '../authButton/authButton'

export const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="" className="logo" />
            <nav className='header_nav'>
                <ul className='header_ul'>
                    <li className='header_li'><a href="#0">Home</a></li>
                    <li className='header_li'><a href="#0">About</a></li>
                    <li className='header_li'>
                        <a href="#0">Clients</a>
                        <ul className='header_ul'>
                            <li className='header_li'><a href="#0">Burger King</a></li>
                            <li className='header_li'><a href="#0">Southwest Airlines</a></li>
                            <li className='header_li'><a href="#0">Levi Strauss</a></li>
                        </ul>
                    </li>
                    <li className='header_li'>
                        <a href="#0">Services</a>
                        <ul className='header_ul'>
                            <li className='header_li'><a href="#0">Print Design</a></li>
                            <li className='header_li'><a href="#0">Web Design</a></li>
                            <li className='header_li'><a href="#0">Mobile App Development</a></li>
                        </ul>
                    </li>
                    <li className='header_li'><a href="#0">Contact</a></li>
                </ul>
            </nav>
           <AuthButton/>

        </header>
    )
}