import { useState, ReactNode } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuId, MENU_ITEMS } from '../../shared/constants'

interface HomeProps {
  username: string
  onLogout: () => void
  children: ReactNode
}

function Home({ username, onLogout, children }: HomeProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState<MenuId | null>(null)

  const menuItems = MENU_ITEMS

  const isActiveRoute = (path: string, subItems?: any[]) => {
    if (location.pathname === path) return true
    if (subItems) {
      return subItems.some(item => location.pathname === item.path)
    }
    return false
  }

  const handleMenuClick = (path: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      const menuId = menuItems.find(item => item.path === path)?.id ?? null
      setOpenDropdown(openDropdown === menuId ? null : menuId)
    } else {
      navigate(path)
      setOpenDropdown(null)
    }
  }

  const handleSubMenuClick = (path: string) => {
    navigate(path)
    setOpenDropdown(null)
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
                    isActiveRoute(item.path, item.subItems) ? 'active' : ''
                  }`}
                  onClick={() => handleMenuClick(item.path, !!item.subItems)}
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
                        className={`dropdown-item ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={() => handleSubMenuClick(subItem.path)}
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
        {children}
      </main>
    </div>
  )
}

export default Home