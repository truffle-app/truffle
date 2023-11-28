import { Elysia } from "elysia"
import recipeRouter from './routes/recipe'
import { cors } from '@elysiajs/cors'
import { logger } from '@grotto/logysia'

// Initialize Elysia and add routes
const app = new Elysia()
  .use(cors())
  .use(logger())
  .get('/', () => 'Welcome')
  .group('/api', app => app
    .group('/recipes', app => app
      .get('/', recipeRouter.getRecipes)
      .get('/:id', recipeRouter.getRecipeByID)
      .post('', recipeRouter.postRecipe))
  )
// Export configured Elysia app
export default app
