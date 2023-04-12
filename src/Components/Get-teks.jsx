import '../css/get-teks.css'
import { useContext, useState } from "react"
import { AppContext } from "../App"

export default function GetTeks() {
    const context = useContext(AppContext)
    const todos = context.todos
    const setTodos = context.setTodos
    const teks = context.teks
    const setTeks = context.setTeks
    const tahun = context.tahun
    const setTahun = context.setTahun
    const user = context.user
    const login = context.login

    
    const [tambahTeks, setTambahTeks] = useState(false)
    const [massage, setMassage] = useState('')
    
    function getID() {
        return Date.now()
    }

    function getKata(event) {
        event.preventDefault();

        if(!teks) {
            setTahun('')
            setTeks('')
            setMassage('Harap isi bagian yang kosong')
            return false
        }
        
        if(!tahun) {
            setTahun('')
            setTeks('')
            return false
        }

        setTodos([...todos, {
            id: getID(),
            user,
            data: {
                teks,
                tahun,
                status: 'Masih Usaha'
            }
        }])
        setTeks('')
        setTahun('')
        setTambahTeks(true)
        setMassage('')
    }
    
    function ubahFormTambah() {
        setTambahTeks(false)
    }

    function btnClose() {
        setTambahTeks(true)
    }

    return (
        (login && (
            <div className="container-teks">
                {tambahTeks && (
                    <button onClick={ubahFormTambah} className='btn-tambah'>tambah</button>
                )}
                {!tambahTeks && (
                    <div className="get-teks">
                        <p className='btn-close' onClick={btnClose}>❌</p>
                        <form onSubmit={getKata} className='form-getTeks'>
                            {massage && <p className='massage'>{massage}</p>}
                            <label htmlFor="teks">Tulis Goalsmu</label>
                            <textarea 
                                    type="text" 
                                    value={teks}
                                    onChange={(e) => setTeks(e.target.value)}
                            />
                            <label htmlFor="teks">Tahun</label>
                            <input 
                                    type="text" 
                                    value={tahun}
                                    onChange={(e) => setTahun(e.target.value)}
                            />
                            <button type='submit'>Tulis</button>
                        </form>
                    </div>
                )}
                {/* {formTambah && (
                    <div className="tambah-teks">
                        <form onSubmit={tambahKata} className='form-tambahTeks'>
                            <label htmlFor="teks">Tulis Impianmu</label>
                            <textarea 
                                    type="text" 
                                    value={teks}
                                    onChange={(e) => setTeks(e.target.value)}
                            />
                            <label htmlFor="teks">Tahun</label>
                            <input 
                                    type="text" 
                                    value={tahun}
                                    onChange={(e) => setTahun(e.target.value)}
                            />
                            <button type='submit'>Tambah</button>
                        </form>
                    </div>
                )} */}
            </div>
        ))
    )
}