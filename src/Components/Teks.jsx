import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import '../css/teks.css'

export default function Teks() {
    const context = useContext(AppContext)
    const todos = context.todos
    const setTodos = context.setTodos
    const user = context.user
    const login = context.login

    const [jumlahtercapai, setJumlahTercapai] = useState(0)
    const [jumlahGoals, setJumlahGoals] = useState(0)


    useEffect(() => {
        todos.map((e, i ) => {
            return setJumlahGoals(i + 1)
        })
    })

    // useEffect(() => {
    //     todos.filter((a) => {
    //         const status = a.data.status === 'Alhamdullilah'
    //         console.log(status);
    //     })
    // })

    function tercapai(item) {
        const updateDataStatus = {
            id: item.id,
            user: item.user,
            data: {
                teks: item.data.teks,
                tahun: item.data.tahun,
                status: 'Alhamdullilah'
            }
        }

        // . Mencari index
        const indexTodos = todos.findIndex((todo) => {
            return todo.id === item.id
        })
        
        const updatedTodos = [...todos]
        updatedTodos[indexTodos] = updateDataStatus
        
        setTodos(updatedTodos)
        setJumlahTercapai(jumlahtercapai + 1)
    }

    function hapusGoals(item) {
        if(item.data.status === 'Alhamdullilah') {
            setJumlahTercapai(jumlahtercapai - 1)
        }
        const filterTodos = todos.filter((todo) => {
            return todo.id !== item.id
        })
        setTodos(filterTodos)
        setJumlahGoals(jumlahGoals - 1)
    }

    function reset() {
        alert('Harap Refresh Browser Anda')
        return localStorage.clear()
    }

    return (
        <div className="teks-container">
            {login && (
                <div className="judul-teks">
                    <p>{user} Goals</p>
                </div>
            )}
            <div className="data-goals">
                <p>Jumlah Goals: {jumlahGoals}</p>
                <p>Tercapai: {jumlahtercapai}</p>
            </div>
            <div className="btn-reset">
                <button onClick={reset}>reset</button>
            </div>
            <div className="teks-goals">
                <table cellPadding="8" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Goals</th>
                            <th>Tahun</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                    {todos.map((item) => {
                        return (
                            <tr>
                                <td>{item.data.teks}</td>
                                <td>{item.data.tahun}</td>
                                <td className={item.data.status}>{item.data.status}</td>
                                <td className="aksi">
                                    <button onClick={hapusGoals.bind(this, item)}>❎</button>
                                    <button onClick={tercapai.bind(this, item)}>✅</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}