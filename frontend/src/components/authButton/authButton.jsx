import {useState} from 'react'
import { AuthModal } from '../authModal/authModal'

export const AuthButton = () => {
    const [isVisibleModal, setVisibleModal] = useState(false)

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
                <button className="is-auth">Войти</button>
            </>
        )
    }
    return(
        <button onClick={openModal} className="is-auth">Войти</button>
    )
}