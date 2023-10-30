import ScrollViewWrapper from '../components/ScollViewWrapper'
import BackButton from '../components/Buttons/BackButton'
import HeaderWrapper from '../components/HeaderWrapper'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import React from 'react-native'
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
