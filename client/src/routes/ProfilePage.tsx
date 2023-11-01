import React from 'react-native'
import { useNavigate } from 'react-router-native'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import Navbar from '../components/Navbar/Navbar'
import PlainText from '../components/Text/PlainText'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
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
