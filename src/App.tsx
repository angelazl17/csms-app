import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Login } from './modules/auth'
import { Home } from './modules/home'
import { AppRouter } from './core/router'
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
    <BrowserRouter>
      <div className="app">
        {isAuthenticated ? (
          <Home username={username} onLogout={handleLogout}>
            <AppRouter isAuthenticated={isAuthenticated} />
          </Home>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
