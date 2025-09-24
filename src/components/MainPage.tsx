import { useState } from 'react'

interface MainPageProps {
  username: string
  onLogout: () => void
}

type MenuId = 'dashboard' | 'users' | 'settings' | 'reports'

interface MenuItem {
  id: MenuId
  label: string
}

function MainPage({ username, onLogout }: MainPageProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuId>('dashboard')

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'users', label: 'Users' },
    { id: 'settings', label: 'Settings' },
    { id: 'reports', label: 'Reports' }
  ]

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <div className="content">Welcome to Dashboard</div>
      case 'users':
        return <div className="content">Users Management</div>
      case 'settings':
        return <div className="content">System Settings</div>
      case 'reports':
        return <div className="content">Reports & Analytics</div>
      default:
        return <div className="content">Welcome</div>
    }
  }

  return (
    <div className="main-page">
      <header className="header">
        <div className="header-left">
          <nav className="menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`menu-item ${selectedMenu === item.id ? 'active' : ''}`}
                onClick={() => setSelectedMenu(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="header-right">
          <span className="user-info">Welcome, {username}</span>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default MainPage