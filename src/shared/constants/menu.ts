export type MenuId = 'dashboard' | 'products' | 'settings' | 'reports' | 'parts' | 'lessons'

export interface SubMenuItem {
  id: MenuId
  label: string
  path: string
}

export interface MenuItem {
  id: MenuId
  label: string
  path: string
  subItems?: SubMenuItem[]
}

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  {
    id: 'products',
    label: 'Products',
    path: '/products',
    subItems: [
      { id: 'parts', label: 'Parts', path: '/products/parts' },
      { id: 'lessons', label: 'Lessons', path: '/products/lessons' }
    ]
  },
  { id: 'settings', label: 'Settings', path: '/settings' },
  { id: 'reports', label: 'Reports', path: '/reports' }
]


// export const MENU_LABELS = {
//   DASHBOARD: 'Dashboard',
//   PRODUCTS: 'Products',
//   SETTINGS: 'Settings',
//   REPORTS: 'Reports'
// } as const