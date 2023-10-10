import Elysia from 'elysia'
import recipeService from '../db/service/recipe'

// GET /recipes
const getRecipes = async() => {
  const recipes = await recipeService.getRecipes()
  return recipes
}

const recipeRouter = (app: Elysia) =>
  app.group('/recipes', app =>
    app.get('/', getRecipes)
  )

export default recipeRouter
