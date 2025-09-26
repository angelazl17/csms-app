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

// // Lazy load components for better performance
// export const routeConfigs: RouteConfig[] = [
//   {
//     path: ROUTE_PATHS.DASHBOARD,
//     element: () => import('@components/pages/Dashboard'),
//     label: 'Dashboard',
//     requiresAuth: true
//   },
//   {
//     path: ROUTE_PATHS.PRODUCTS,
//     element: () => import('@components/modules/product/Products'),
//     label: 'Products',
//     requiresAuth: true,
//     children: [
//       {
//         path: ROUTE_PATHS.PARTS,
//         element: () => import('@components/modules/product/Parts'),
//         label: 'Parts',
//         requiresAuth: true
//       },
//       {
//         path: ROUTE_PATHS.LESSONS,
//         element: () => import('@components/modules/product/Lessons'),
//         label: 'Lessons',
//         requiresAuth: true
//       }
//     ]
//   },
//   {
//     path: ROUTE_PATHS.SETTINGS,
//     element: () => import('@components/pages/Settings'),
//     label: 'Settings',
//     requiresAuth: true
//   },
//   {
//     path: ROUTE_PATHS.REPORTS,
//     element: () => import('@components/pages/Reports'),
//     label: 'Reports',
//     requiresAuth: true
//   }
// ]