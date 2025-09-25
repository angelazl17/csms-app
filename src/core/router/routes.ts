import { RouteConfig, RoutePaths } from './types'

export const ROUTE_PATHS: RoutePaths = {
  LOGIN: '/',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  PARTS: '/products/parts',
  LESSONS: '/products/lessons',
  SETTINGS: '/settings',
  REPORTS: '/reports'
}

// Lazy load components for better performance
export const routeConfigs: RouteConfig[] = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: () => import('../../pages/Dashboard'),
    label: 'Dashboard',
    requiresAuth: true
  },
  {
    path: ROUTE_PATHS.PRODUCTS,
    element: () => import('../../modules/product/Products'),
    label: 'Products',
    requiresAuth: true,
    children: [
      {
        path: ROUTE_PATHS.PARTS,
        element: () => import('../../modules/product/Parts'),
        label: 'Parts',
        requiresAuth: true
      },
      {
        path: ROUTE_PATHS.LESSONS,
        element: () => import('../../modules/product/Lessons'),
        label: 'Lessons',
        requiresAuth: true
      }
    ]
  },
  {
    path: ROUTE_PATHS.SETTINGS,
    element: () => import('../../pages/Settings'),
    label: 'Settings',
    requiresAuth: true
  },
  {
    path: ROUTE_PATHS.REPORTS,
    element: () => import('../../pages/Reports'),
    label: 'Reports',
    requiresAuth: true
  }
]