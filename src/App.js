
import { createContext, useEffect, useState } from 'react';
import './App.css';
import GetTeks from './Components/Get-teks';
import  Teks  from './Components/Teks';
import Navbar from './Components/Navbar';
import Username from './Components/Username';

export const AppContext = createContext({})

function App() {
  const [teks, setTeks] = useState('')
  const [tahun, setTahun] = useState('')
  const [theme, setTheme] = useState('dark')

  const [todos, setTodos] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('todos'));
    return storedItems !== null ? storedItems : [];
  })

  const [login, setLogin] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('login'));
    return storedItems !== null ? storedItems : false;
  })

  const [user, setUser] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('user'));
    return storedItems !== null ? storedItems : '';
  })

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
  }, [login]);

  const useAppValue = {
    todos,
    setTodos,
    teks,
    setTeks,
    tahun,
    setTahun,
    user,
    setUser,
    login,
    setLogin,
    theme,
    setTheme
  }

  return (
    <AppContext.Provider value={useAppValue}>
      <div className={`app ${theme}`}>
        <Navbar />
        <Username />
        <GetTeks />
        <Teks />
      </div>
    </AppContext.Provider>
  );
}

export default App;
