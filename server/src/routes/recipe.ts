import Elysia from "elysia"

// GET /recipes
const getRecipes = async() => {
  return 'Hello recipes?'
}

const recipeRouter = (app: Elysia) =>
  app.group('/recipes', app =>
    app.get('/', getRecipes)
  )

export default recipeRouter
