import ScrollViewWrapper from '../components/Wrappers/ScollViewWrapper'
import { HeaderWrapper } from '../components/Wrappers/HeaderWrapper'
import ProfileButton from '../components/Buttons/ProfileButton'
import NavBackButton from '../components/Buttons/NavBackButton'
import SectionNavbar from '../components/Navbar/SectionNavbar'
import RatingButton from '../components/Buttons/RatingButton'
import PageWrapper from '../components/Wrappers/PageWrapper'
import { useNavigate, useParams } from 'react-router-native'
import recipeService from '../services/recipeService'
import PlainText from '../components/Text/PlainText'
import Navbar from '../components/Navbar/Navbar'
import { FontAwesome } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import styled from '@emotion/native'
import React from 'react-native'
import theme from '../theme'

const RecipePageImage = styled.Image`
  width: 98%;
  margin: 1%;
  height: 250px;
  border-radius: 2px;
`

const LargeRecipeInfoContainer = styled.View`
  width: 98%;
  margin: 1%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 10px;
  margin-bottom: 6px;
`

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 12px;
  margin-bottom: 4px;
`

const TabContainer = styled.View`
  margin-left: 4px;
  margin-bottom: 16px;
  margin-right: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const IngredientContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
  margin-left: 10px;
`

const Quantity = styled.Text`
  flex: 1;
  text-align: center;
  color: ${theme.colors.darkExtra};
  fontsize: ${theme.fontSizes.medium};
`

const Unit = styled.Text`
  flex: 1;
  text-align: center;
  color: ${theme.colors.darkExtra};
  fontsize: ${theme.fontSizes.medium};
`

const IngredientName = styled.Text`
  flex: 3;
  text-align: left;
  color: ${theme.colors.darkExtra};
  fontsize: ${theme.fontSizes.medium};
`

const StepsContainer = styled.Pressable`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 8px;
  margin-left: 8px;
`

const StepLabel = styled.Text`
  font-family: ${theme.fonts.title};
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.darkExtra};
  margin-right: 4px;
`

const StepDescription = styled.Text`
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.darkExtra};
  flex: 1;
`
const StepDescriptionCompleted = styled(StepDescription)`
  color: ${theme.colors.primaryLight};
  text-decoration-line: line-through;
`

const StepNumber = ({
  stepNumber,
  description,
  onPress,
  completed
}: StepNumberProps) => {
  return (
    <StepsContainer onPress={onPress}>
      <StepLabel>{`${stepNumber}: `}</StepLabel>
      {completed ? (
        <StepDescriptionCompleted>{description}</StepDescriptionCompleted>
      ) : (
        <StepDescription>{description}</StepDescription>
      )}
    </StepsContainer>
  )
}

const RecipePage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { id } = useParams()
  const [recipe, setRecipe] = useState<RecipeObject | undefined>(undefined)
  const [activeTab, setActiveTab] = useState<string>(t('ingredients'))
  const tabs = [t('ingredients'), t('steps')]
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [completedSteps, setCompletedSteps] = useState(new Set())

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const toggleStepCompletion = (index: number) => {
    setCompletedSteps((prevSteps) => {
      const newSteps = new Set(prevSteps)
      if (newSteps.has(index)) {
        newSteps.delete(index)
      } else {
        newSteps.add(index)
      }
      return newSteps
    })
  }

  useEffect(() => {
    const fetchRecipe = async (id: number) => {
      const fetchedRecipe = await recipeService.getRecipe(id)
      const transformedSteps = fetchedRecipe.steps.map((step, index) => ({
        step: index + 1,
        description: step
      }))
      setRecipe({
        ...fetchedRecipe,
        steps: transformedSteps
      })
    }

    fetchRecipe(Number(id))
  }, [])

  if (recipe) {
    return (
      <PageWrapper>
        <HeaderWrapper>
          <NavBackButton />
        </HeaderWrapper>
        <ScrollViewWrapper>
          <RecipePageImage source={{ uri: recipe?.imageUrl }} />
          <LargeRecipeInfoContainer>
            <PlainText
              color={theme.colors.darkExtra}
              fontFamily={theme.fonts.title}
            >
              {recipe?.name}
            </PlainText>
            <PlainText
              color={theme.colors.darkExtra}
              fontSize={theme.fontSizes.small}
            >
              {recipe?.description}
            </PlainText>
          </LargeRecipeInfoContainer>
          <InfoContainer>
            <RatingButton
              rating={recipe?.rating}
              pressable={true}
              onPress={() => {
                console.log('RatingButton pressed!')
              }}
              style={{ marginRight: 10 }}
            />
            <ProfileButton
              profile={recipe?.profile}
              pressable={true}
              onPress={() => {
                console.log('ProfileButton pressed!')
              }}
            />
            <FontAwesome
              name={isBookmarked ? 'bookmark' : 'bookmark-o'}
              size={26}
              color={isBookmarked ? theme.colors.primary : theme.colors.primary}
              onPress={toggleBookmark}
              style={{ marginLeft: 'auto', marginRight: 20 }} // This will push the icon to the far right
            />
          </InfoContainer>
          <SectionNavbar
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === tabs[0] && (
            <TabContainer>
              {recipe.ingredients.map((ingredients, index) => (
                <IngredientContainer key={index}>
                  <Quantity>{ingredients.quantity}</Quantity>
                  <Unit>{ingredients.unit}</Unit>
                  <IngredientName>{ingredients.ingredient}</IngredientName>
                </IngredientContainer>
              ))}
            </TabContainer>
          )}
          {activeTab === tabs[1] && (
            <TabContainer>
              {recipe.steps.map((step, index) => (
                <StepNumber
                  key={index}
                  stepNumber={index + 1}
                  description={step.description}
                  onPress={() => toggleStepCompletion(index)}
                  completed={completedSteps.has(index)}
                />
              ))}
            </TabContainer>
          )}
        </ScrollViewWrapper>
        <Navbar navigateTo={navigate}></Navbar>
      </PageWrapper>
    )
  } else {
    return <PageWrapper></PageWrapper>
  }
}

export default RecipePage
