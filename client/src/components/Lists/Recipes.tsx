import SmallRecipeDisplay from '../Displays/SmallRecipeDisplay'
import { useNavigate } from 'react-router-native'
import React from 'react'

interface RecipesProps {
  recipes: RecipeObject[];
}

const Recipes = ({ recipes }: RecipesProps) => {
  const navigate = useNavigate()

  const handlePressFeedPost = (id: number) => {
    navigate(`/recipe/${id}`)
  }
  return recipes.map((recipe, index) => (
    <SmallRecipeDisplay
      key={index}
      recipe={recipe}
      onPress={handlePressFeedPost}
    />
  ))
}

export default Recipes
