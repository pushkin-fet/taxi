import {useContext, useState} from 'react'
import { AuthModal } from '../authModal/authModal'
import {Context} from "../../App.jsx";
import {userExit} from "../../service/Authorization.js";

export const AuthButton = () => {
    const [isVisibleModal, setVisibleModal] = useState(false)
    const {isAuth, setIsAuth} = useContext(Context)

    function openModal(){
        setVisibleModal(true)
    }

    function closeModal(){
        setVisibleModal(false)
    }
    async function exit(){

        console.log('Выход сработал')
        userExit()
            .then(() => {
                console.log('Вы успешно вышли')
            })
            .catch(() => {
                console.log('ОШИБКА - выйти Не удалось')
            })
            .finally(() => { setIsAuth(false) })
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
        <button onClick={isAuth ? exit : openModal} className="is-auth">{isAuth ? 'Выйти' : 'Войти'}</button>
    )

}