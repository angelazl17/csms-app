import { useState } from 'react'
import Login from './components/Login.tsx'
import MainPage from './components/MainPage.tsx'
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
        <MainPage username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
