import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import AddRecipeButton from '../components/Buttons/AddRecipeButton'
import SectionNavbar from '../components/Navbar/SectionNavbar'
import PageWrapper from '../components/Wrappers/PageWrapper'
import { initRecipes } from '../reducers/userRecipeReducer'
import { RootState, useAppDispatch } from '../store'
import Recipes from '../components/Lists/Recipes'
import { useNavigate } from 'react-router-native'
import Navbar from '../components/Navbar/Navbar'
import Avatar from '../components/Image/Avatar'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import { RecipeObject, User } from '@types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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
  const [activeTab, setActiveTab] = useState<string>(t('my-recipes'))
  const tabs = [t('my-recipes'), t('bookmarks')]

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initRecipes())
  }, [])

  const recipes: RecipeObject[] = useSelector(
    (state: RootState) => state.userRecipes
  )

  const bookmarks: RecipeObject[] = useSelector(
    (state: RootState) => state.bookmarks
  )

  const user: User = useSelector((state: RootState) => state.user)

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{t('profile')}</Title>
      </HeaderWrapper>
      <ScrollViewWrapper>
        <AvatarView>
          <Avatar />
          <Title>{user.username}</Title>
        </AvatarView>
        <SectionNavbar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === tabs[0] && <Recipes recipes={recipes} />}
        {activeTab === tabs[1] && <Recipes recipes={bookmarks} />}
      </ScrollViewWrapper>
      <AddRecipeButton />
      <Navbar navigateTo={navigate}></Navbar>
    </PageWrapper>
  )
}

export default ProfilePage
