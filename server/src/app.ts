import recipeRouter from './routes/recipe'
import { logger } from '@grotto/logysia'
import userRouter from './routes/user'
import { cors } from '@elysiajs/cors'
import { Elysia } from 'elysia'

const app = new Elysia()
  .use(cors())
  .use(logger())
  .get('/', () => 'Welcome')
  .group('/api', (app) =>
    app
      .group('/recipes', (app) =>
        app
          .get('/', recipeRouter.getRecipes)
          .get('/:id', recipeRouter.getRecipeByID)
          .get('/user/:userId', recipeRouter.getRecipesByUser)
          .post('', recipeRouter.postRecipe)
      )
      .group('/users', (app) => app.get('/:id', userRouter.getUserByID))
  )

export default app
