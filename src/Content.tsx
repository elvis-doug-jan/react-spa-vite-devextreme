import { Suspense, useEffect } from 'react'
import appInfo from './app-info'
import { Footer } from './components'
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts'
import routes from './app-routes'
import { useNavigation, NavigationContextType } from './contexts/navigation'
import { useLocation, useRoutes } from 'react-router-dom'

export default function Content() {
  const location = useLocation()
  const { navigationPaths, setNavigationData } = useNavigation() as NavigationContextType

  // Set navigation
  useEffect(() => {
    const path = navigationPaths.find(_ => location.pathname.startsWith(_))
    setNavigationData({ currentPath: path })
  }, [location, navigationPaths, setNavigationData])

  return (
    <SideNavBarLayout title={appInfo.title}>
      <Suspense fallback="LOADING...">{useRoutes(routes)}</Suspense>
      <Footer>
        Copyright © 2022-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        React Vite with DevExtreme
      </Footer>
    </SideNavBarLayout>
  )
}
