import { useContext, useState } from "react";
import { AppContext } from "../App";
import '../css/username.css'

export default function Username() {
    const context = useContext(AppContext)
    const user = context.user
    const setUser = context.setUser
    const login = context.login
    const setLogin = context.setLogin
    console.log(context);



    const [massage, setMassage] = useState('')

    function getUser(event) {
        event.preventDefault();

        if(!user) {
            setMassage('Harap isi Username Anda!!')
            return false
        }

        setLogin(true)
        setMassage('')
    }

    return (
        (!login && (
        <div className="username">
            {massage && (
                <p className="massage">{massage}</p>
            )}
            <form onSubmit={getUser} className="form-username">
                <label htmlFor="teks">Username</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <button type="submit">Buat</button>
            </form>
        </div>
        ))
    )
}