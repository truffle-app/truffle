import React from 'react-native'
import { useNavigate } from 'react-router-native'
import BackButton from '../components/Buttons/BackButton'
import Navbar from '../components/Navbar/Navbar'
import PlainText from '../components/Text/PlainText'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import theme from '../theme'

const AddRecipePage = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <HeaderWrapper>
        <BackButton />
        <PlainText
          color={theme.colors.darkExtra}
          fontSize={theme.fontSizes.large}
        >
          Add recipe
        </PlainText>
      </HeaderWrapper>
      <ScrollViewWrapper>
        <PlainText>Add recipe form here as separate component</PlainText>
      </ScrollViewWrapper>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default AddRecipePage
