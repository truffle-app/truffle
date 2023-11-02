import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import React from 'react-native'

const ProfilePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('profile')}</Title>
      </HeaderWrapper>
      <ScrollViewWrapper>
        <PlainText>
          Add contents of profile here, probably as multiple components
        </PlainText>
      </ScrollViewWrapper>
      <AddRecipeButton previousLocation={'/profile'}></AddRecipeButton>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default ProfilePage
