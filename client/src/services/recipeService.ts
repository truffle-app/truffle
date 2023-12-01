import { RecipeObject } from '@types'
import axios from 'axios'

const baseUrl = `${process.env.EXPO_PUBLIC_API_URL}/api/recipes`

const getRecipes = async () => {
  try {
    const res = await axios.get(baseUrl)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const getRecipe = async (id: number) => {
  try {
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const getUserRecipes = async (userId: number) => {
  try {
    const res = await axios.get(`${baseUrl}/user/${userId}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const addRecipe = async (recipe: RecipeObject) => {
  try {
    const res = await axios.post(baseUrl, { recipe: recipe })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default { getRecipes, getRecipe, getUserRecipes, addRecipe }
