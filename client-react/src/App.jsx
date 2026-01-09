import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.users));
    } );
    return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React with Vite + Python With Flask</h1>
      <div className="card">
        <h2>Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
