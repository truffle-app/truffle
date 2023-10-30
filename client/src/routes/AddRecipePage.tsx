import ScrollViewWrapper from '../components/ScollViewWrapper'
import HeaderWrapper from '../components/HeaderWrapper'
import PlainText from '../components/Text/PlainText'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { AntDesign } from '@expo/vector-icons'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../theme'

const BackButton = styled.Pressable`
  margin-right: 10px;
`

const AddRecipePage = () => {
  const navigate = useNavigate()

  const navigateBack = () => {
    // Refactor to actually go back to previous page
    navigate('/Feed')
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <BackButton onPress={navigateBack}>
          <AntDesign name="left" size={25} color={theme.colors.darkExtra} />
        </BackButton>
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
