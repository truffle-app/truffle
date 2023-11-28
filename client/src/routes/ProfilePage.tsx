import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import SectionNavbar from '../components/Navbar/SectionNavbar'
import PageWrapper from '../components/Wrappers/PageWrapper'
import recipeService from '../services/recipeService'
import Recipes from '../components/Lists/Recipes'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import Avatar from '../components/Image/Avatar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import { useEffect, useState } from 'react'
import styled from '@emotion/native'
import React from 'react-native'

const AvatarView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const ProfilePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [recipes, setRecipes] = useState<RecipeObject[]>([])
  const [activeTab, setActiveTab] = useState<string>(t('my-recipes'))
  const tabs = [t('my-recipes')] //, t('bookmarks')]

  useEffect(() => {
    setRecipes(recipeService.getRecipes())
  }, [])

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('profile')}</Title>
      </HeaderWrapper>
      <ScrollViewWrapper>
        <AvatarView>
          <Avatar />
          <Title>Username</Title>
        </AvatarView>
        <SectionNavbar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === tabs[0] && <Recipes recipes={recipes} previousLocation={'/profile'} />}
      </ScrollViewWrapper>
      <AddRecipeButton previousLocation={'/profile'}></AddRecipeButton>
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default ProfilePage
