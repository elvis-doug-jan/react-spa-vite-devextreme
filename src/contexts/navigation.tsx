import { getOnlyPathsNavigate } from '@utils/common-functions'
import { createContext, useContext, useState } from 'react'
import { navigation } from '../app-navigation'

const NavigationContext = createContext({})
const useNavigation = () => useContext(NavigationContext)

const navigationPaths = getOnlyPathsNavigate(navigation)

function NavigationProvider(props: any) {
  const [navigationData, setNavigationData] = useState({ currentPath: '' })

  return (
    <NavigationContext.Provider
      value={{ navigationPaths, navigationData, setNavigationData }}
      {...props}
    />
  )
}

export { NavigationProvider, useNavigation }
