export interface RouteConfig {
  path: string
  element: React.ComponentType
  label: string
  requiresAuth?: boolean
  children?: RouteConfig[]
}

export type RoutePaths = {
  LOGIN: '/'
  DASHBOARD: '/dashboard'
  PRODUCTS: '/products'
  PARTS: '/products/parts'
  LESSONS: '/products/lessons'
  SETTINGS: '/settings'
  REPORTS: '/reports'
}