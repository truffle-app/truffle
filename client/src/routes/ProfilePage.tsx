import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import React from 'react-native'
import theme from '../theme'

const ProfilePage = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <HeaderWrapper>
        <PlainText
          color={theme.colors.darkExtra}
          fontSize={theme.fontSizes.large}
        >
          Profile
        </PlainText>
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
