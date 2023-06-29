import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { setUserData, userSelector, clearUserData } from '../../redux/user.store'
import { useState } from 'react'
import { TextBox, Button } from 'devextreme-react'
import { Container, Row, UserStoreData } from './styles'

export function HomePage() {
  const { t } = useTranslation()
  const userStoreState = useSelector(userSelector)
  const [userDataLocal, setUserDataLocal] = useState(userStoreState)
  const distpatch = useDispatch()

  const changeUserData = (key: 'email' | 'name' | 'avatarUrl', value: string) => {
    setUserDataLocal({ ...userDataLocal, [key]: value })
  }

  const persistUserDataHandler = () => distpatch(setUserData(userDataLocal))
  const clearUserDataHandler = () => {
    setUserDataLocal({ email: '', name: '', avatarUrl: '' })
    distpatch(clearUserData())
  }

  return (
    <Container>
      <h2>
        <p>{t('homeTitle')}</p>
      </h2>
      <Row>
        Name:
        <TextBox
          value={userDataLocal.name || userStoreState.name}
          onValueChanged={({ value }) => changeUserData('name', value)}
        />
      </Row>
      <br />
      <Row>
        Email:
        <TextBox
          value={userDataLocal.email || userStoreState.email}
          onValueChanged={({ value }) => changeUserData('email', value)}
        />
      </Row>
      <Row>
        Avatar URL:
        <TextBox
          value={userDataLocal.avatarUrl || userStoreState.avatarUrl}
          onValueChanged={({ value }) => changeUserData('avatarUrl', value)}
        />
      </Row>
      <br />
      <Row>
        <Button text="persist" onClick={persistUserDataHandler} />
        <Button text="clear" onClick={clearUserDataHandler} />
      </Row>
      <br />
      <br />
      <UserStoreData>
        <Row>
          <b>State user example:</b>
          <br />
          <br />
        </Row>
        <Row>
          <b>Name:</b> {userStoreState.name} <br />
        </Row>
        <Row>
          <b>Email:</b> {userStoreState.email}
        </Row>
        <Row>
          <b>Avatar URL:</b> {userStoreState.avatarUrl}
        </Row>
      </UserStoreData>
    </Container>
  )
}
