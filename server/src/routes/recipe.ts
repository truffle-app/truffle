import Elysia from 'elysia'
import recipeService from '../db/service/recipe'

// GET /recipes
const getRecipes = async({set}: {set: any}) => {
  try {
    const recipes = await recipeService.getRecipes()
    set.status = 200
    return recipes
  } catch(error) {
    console.log(error)
    set.status = 500
    return {}
  }
}

const getRecipeByID = async({params, set}: {params: any, set: any}) => {
  try {
    const recipes = await recipeService.getRecipeByID(params.id)
    set.status = 200
    return recipes
  } catch (error) {
    console.log(error)
    set.status = 500
    return ''
  }

}

const postRecipe = async({request, set}: {request: any, set: any}) => {
  try {
    console.log(request)
    set.status = 200
    return ''
  } catch (error) {
    console.log(error)
    set.status = 500
    return ''
  }
  // const newRecipe = await recipeService.addRecipe(body.recipe)
}


export default {
  getRecipes: getRecipes,
  getRecipeByID: getRecipeByID,
  postRecipe: postRecipe
}
