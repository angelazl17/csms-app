import { Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ROUTE_PATHS } from './routes'

const Dashboard = lazy(() => import('../../pages/Dashboard'))
const Products = lazy(() => import('../../modules/product/Products'))
const Parts = lazy(() => import('../../modules/product/Parts'))
const Lessons = lazy(() => import('../../modules/product/Lessons'))
const Settings = lazy(() => import('../../pages/Settings'))
const Reports = lazy(() => import('../../pages/Reports'))

interface AppRouterProps {
  isAuthenticated: boolean
}

function AppRouter({ isAuthenticated }: AppRouterProps) {
  if (!isAuthenticated) {
    return null
  }

  return (
    <Suspense fallback={<div className="content">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTE_PATHS.DASHBOARD} replace />} />
        <Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTE_PATHS.PRODUCTS} element={<Products />} />
        <Route path={ROUTE_PATHS.PARTS} element={<Parts />} />
        <Route path={ROUTE_PATHS.LESSONS} element={<Lessons />} />
        <Route path={ROUTE_PATHS.SETTINGS} element={<Settings />} />
        <Route path={ROUTE_PATHS.REPORTS} element={<Reports />} />
        <Route path="*" element={<Navigate to={ROUTE_PATHS.DASHBOARD} replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter