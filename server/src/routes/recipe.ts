import recipeService from '@database/service/recipe'
import { Recipe } from '@types'

const getRecipes = async ({ set }: { set: any }) => {
  try {
    const recipes = await recipeService.getRecipes()
    set.status = 200
    return recipes
  } catch (error) {
    console.error(error)
    set.status = 500
    return {}
  }
}

const getRecipeByID = async ({ params, set }: { params: any; set: any }) => {
  try {
    const recipes = await recipeService.getRecipeByID(params.id)
    set.status = 200
    return recipes
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

const getRecipesByUser = async ({ params, set }: { params: any; set: any }) => {
  try {
    const recipes = await recipeService.getRecipesByUser(params.userId)
    set.status = 200
    return recipes
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

const postRecipe = async ({
  request,
  set,
  body
}: {
  request: any
  set: any
  body: any
}) => {
  try {
    const newRecipe = await recipeService.addRecipe(body.recipe as Recipe)
    set.status = 200
    return newRecipe
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

export default {
  getRecipes,
  getRecipeByID,
  getRecipesByUser,
  postRecipe
}
