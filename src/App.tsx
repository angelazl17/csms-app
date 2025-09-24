import { useState } from 'react'
import {Login} from './modules/auth'
import {Home} from './modules/home'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')

  const handleLogin = (user: string) => {
    setUsername(user)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setUsername('')
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      {isAuthenticated ? (
        <Home username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
