import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ContextMenu, { Position } from 'devextreme-react/context-menu'
import List from 'devextreme-react/list'
import type { UserPanelProps } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector, clearUserData } from '../../redux/user.store'
import './UserPanel.scss'

export default function UserPanel({ menuMode }: UserPanelProps) {
  const userStoreState = useSelector(userSelector)
  const distpatch = useDispatch()

  const navigate = useNavigate()

  function navigateToProfile() {
    navigate('/profile')
  }

  function signOut() {
    distpatch(clearUserData())
  }

  const menuItems = useMemo(
    () => [
      {
        text: 'Profile',
        icon: 'user',
        onClick: navigateToProfile
      },
      {
        text: 'Logout',
        icon: 'runner',
        onClick: signOut
      }
    ],
    [signOut]
  )
  return (
    <div className={'user-panel'}>
      <div className={'user-info'}>
        <div className={'image-container'}>
          <div
            style={{
              background: `url(${userStoreState?.avatarUrl}) no-repeat #fff`,
              backgroundSize: 'cover'
            }}
            className={'user-image'}
          />
        </div>
        <div className={'user-name'}>{userStoreState?.email}</div>
      </div>

      {menuMode === 'context' && (
        <ContextMenu items={menuItems} target={'.user-button'} showEvent={'dxclick'} width={210} cssClass={'user-menu'}>
          <Position my={'top center'} at={'bottom center'} />
        </ContextMenu>
      )}
      {menuMode === 'list' && <List className={'dx-toolbar-menu-action'} items={menuItems} />}
    </div>
  )
}
