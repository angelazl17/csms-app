import { useState } from 'react'
import { MenuId,  MENU_ITEMS } from '../../shared/constants'

interface HomeProps {
  username: string
  onLogout: () => void
}

function Home({ username, onLogout }: HomeProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuId>('dashboard')
  const [openDropdown, setOpenDropdown] = useState<MenuId | null>(null)

  const menuItems = MENU_ITEMS

  const handleMenuClick = (menuId: MenuId, hasSubItems: boolean) => {
    if (hasSubItems) {
      setOpenDropdown(openDropdown === menuId ? null : menuId)
    } else {
      setSelectedMenu(menuId)
      setOpenDropdown(null)
    }
  }

  const handleSubMenuClick = (menuId: MenuId) => {
    setSelectedMenu(menuId)
    setOpenDropdown(null)
  }

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <div className="content">Welcome to Dashboard</div>
      case 'products':
        return <div className="content">Products Overview</div>
      case 'parts':
        return <div className="content">Parts Management</div>
      case 'lessons':
        return <div className="content">Lessons Management</div>
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
              <div key={item.id} className="menu-item-container">
                <button
                  className={`menu-item ${
                    selectedMenu === item.id ||
                    (item.subItems && item.subItems.some(sub => sub.id === selectedMenu))
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => handleMenuClick(item.id, !!item.subItems)}
                >
                  {item.label}
                  {item.subItems && (
                    <span className={`dropdown-arrow ${openDropdown === item.id ? 'open' : ''}`}>
                      ▼
                    </span>
                  )}
                </button>

                {item.subItems && openDropdown === item.id && (
                  <div className="dropdown-menu">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.id}
                        className={`dropdown-item ${selectedMenu === subItem.id ? 'active' : ''}`}
                        onClick={() => handleSubMenuClick(subItem.id)}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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

export default Home