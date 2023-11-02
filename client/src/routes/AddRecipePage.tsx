import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import HeaderWrapper from '../components/Wrappers/HeaderWrapper'
import PageWrapper from '../components/Wrappers/PageWrapper'
import BackButton from '../components/Buttons/BackButton'
import PlainText from '../components/Text/PlainText'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import React from 'react-native'

const AddRecipePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <HeaderWrapper>
        <BackButton />
        <Title>{t('add-recipe')}</Title>
      </HeaderWrapper>
      <ScrollViewWrapper>
        <PlainText>Add recipe form here as separate component</PlainText>
      </ScrollViewWrapper>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default AddRecipePage
