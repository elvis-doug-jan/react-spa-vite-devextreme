import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: '/home',
    element: (
      <WrapLazyRoute LazyElement={lazy(() => import('./pages/home/'))} />
    ),
  },
  {
    path: '*',
    element: <Navigate to="/home" />,
  },
  {
    path: '/page1',
    element: (
      <WrapLazyRoute LazyElement={lazy(() => import('./pages/page1/'))} />
    ),
  },
  {
    path: '/page2',
    element: (
      <WrapLazyRoute LazyElement={lazy(() => import('./pages/page2/'))} />
    ),
  },
  {
    path: '/page3',
    element: (
      <WrapLazyRoute LazyElement={lazy(() => import('./pages/page3/'))} />
    ),
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
