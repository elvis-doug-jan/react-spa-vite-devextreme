import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: '/dashboard',
    element: (
      <WrapLazyRoute LazyElement={lazy(() => import('./pages/home/home'))} />
    ),
  },
  {
    path: '*',
    element: <Navigate to="/orders" />,
  },
]

// lazy loading
export function WrapLazyRoute({ LazyElement }: Record<string, any>) {
  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  )
}

export default routes
