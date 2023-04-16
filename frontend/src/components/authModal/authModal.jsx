import { useState } from 'react'
import { registrateUser, authUser } from './../../service/Authorization'
import './style.css'

export const AuthModal = ({ onClose }) => {
    const [registrationWindow, setRegistrationWindow] = useState(true)

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [error, setError] = useState("")

    async function onAuthorization() {
        if (registrationWindow) {
            const response = await registrateUser(email, login, password)
            .then((res) => setError(""))
            .catch(() => setError("Произошла ошибка"))
            console.log(response)
        } else {
            const response = await authUser(email, password)
            .then((res) => setError(""))
            .catch(() => setError("Произошла ошибка"))
            console.log(response)
        }
    }
    return (
        <div className="modal-auth-window" onClick={onClose}>
            <div className="authorization" onClick={(e) => e.stopPropagation()}>
                <div className="form-label">
                    <button onClick={(e) => setRegistrationWindow(false)} className={!registrationWindow ? ["header-auth", "isActiveBtn"].join(" ") : "header-auth"}>ВХОД</button>
                    <button onClick={(e) => setRegistrationWindow(true)} className={registrationWindow ? ["header-reg", "isActiveBtn"].join(' ') : "header-reg"} >РЕГИСТРАЦИЯ</button>
                </div>
                {
                    !registrationWindow ?
                        <div className="sub-authorization">
                            <h4 className="auth-label">Авторизуйтесь</h4>
                            <input type="text" className="useremail" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                            <input type="text" className="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                            {error && <p className='errorMessage'>{error}</p>}
                            <button className="auth" onClick={onAuthorization}>Войти</button>
                        </div>
                        :
                        <div className="registration">
                            <h4 className="reg-label">Зарегистрируйтесь</h4>
                            <input type="text" className="useremail" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                            <input type="text" className="login" onChange={(e)=>setLogin(e.target.value)} placeholder='Login' />
                            <input type="text" className="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                            {error && <p className='errorMessage'>{error}</p>}
                            <button className="reg" onClick={onAuthorization}>Войти</button>
                        </div>
                }

            </div>
        </div>
    )
} 