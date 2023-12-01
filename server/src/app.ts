import bookmarkRouter from '@routes/bookmark'
import recipeRouter from '@routes/recipe'
import { logger } from '@grotto/logysia'
import { cors } from '@elysiajs/cors'
import userRouter from '@routes/user'
import { Elysia } from 'elysia'

const app = new Elysia()
  .use(cors())
  .use(logger())
  .get('/', () => 'Welcome to truffle')
  .group('/api', (app) =>
    app
      .group('/recipes', (app) =>
        app
          .get('/', recipeRouter.getRecipes)
          .get('/:id', recipeRouter.getRecipeByID)
          .get('/user/:userId', recipeRouter.getRecipesByUser)
          .post('', recipeRouter.postRecipe)
      )
      .group('/bookmarks', (app) =>
        app
          .get('/:userId', bookmarkRouter.getBookmarksByUser)
          .post('', bookmarkRouter.addBookmark)
      )
      .group('/users', (app) =>
        app
          .get('/:id', userRouter.getUserByID)
          .post('/login', userRouter.login)
          .post('/register', userRouter.addUser)
      )
  )

export default app
