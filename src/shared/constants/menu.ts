export type MenuId = 'dashboard' | 'products' | 'settings' | 'reports' | 'parts' | 'lessons'

export interface SubMenuItem {
  id: MenuId
  label: string
}

export interface MenuItem {
  id: MenuId
  label: string
  subItems?: SubMenuItem[]
}

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard' },
  {
    id: 'products',
    label: 'Products',
    subItems: [
      { id: 'parts', label: 'Parts' },
      { id: 'lessons', label: 'Lessons' }
    ]
  },
  { id: 'settings', label: 'Settings' },
  { id: 'reports', label: 'Reports' }
]


// export const MENU_LABELS = {
//   DASHBOARD: 'Dashboard',
//   PRODUCTS: 'Products',
//   SETTINGS: 'Settings',
//   REPORTS: 'Reports'
// } as const