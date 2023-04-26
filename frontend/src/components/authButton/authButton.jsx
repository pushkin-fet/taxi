import {useContext, useState} from 'react'
import { AuthModal } from '../authModal/authModal'
import {Context} from "../../App.jsx";

export const AuthButton = () => {
    const [isVisibleModal, setVisibleModal] = useState(false)
    const {isAuth} = useContext(Context)
    function openModal(){
        setVisibleModal(true)
    }

    function closeModal(){
        setVisibleModal(false)
    }

    if(isVisibleModal){
        return(
            <>
                <AuthModal onClose={closeModal}/>
                <button className="is-auth">{isAuth ? 'Выйти' : 'Войти'}</button>
            </>
        )
    }
    return(
        <button onClick={openModal} className="is-auth">{isAuth ? 'Выйти' : 'Войти'}</button>
    )
}