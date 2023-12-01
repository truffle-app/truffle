import recipeService from '../db/service/recipe'

// GET /recipes
const getRecipes = async({set}: {set: any}) => {
  try {
    const recipes = await recipeService.getRecipes()
    set.status = 200
    return recipes
  } catch(error) {
    console.error(error)
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
    console.error(error)
    set.status = 500
    return ''
  }
}

const postRecipe = async({request, set, body}: {request: any, set: any; body: any}) => {
  try {
    const newRecipe = await recipeService.addRecipe(body.recipe)
    set.status = 200
    return newRecipe
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}


export default {
  getRecipes: getRecipes,
  getRecipeByID: getRecipeByID,
  postRecipe: postRecipe
}
