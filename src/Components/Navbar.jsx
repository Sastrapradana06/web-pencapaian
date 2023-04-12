import { useContext } from 'react'
import '../css/navbar.css'
import { AppContext } from '../App'
export default function Navbar() {
    const context = useContext(AppContext)
    const theme = context.theme
    const setTheme = context.setTheme

    function setThema() {
        (setTheme(theme === 'dark' ? 'light' : 'dark'))
    }

    return (
        <div className="navbar">
            <div className="judul">
                <p>Ceritaku</p>
                <span onClick={setThema}>👑</span>
            </div>
            <div className="teks-title">
                <p>Tuliskan keinginan masa depan anda</p>
            </div>
        </div>
    )
}