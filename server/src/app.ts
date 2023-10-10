import { Elysia } from "elysia"
import recipeRouter from './routes/recipe'

// Initialize Elysia
const app = new Elysia()

app.get('/', () => 'Welcome')

// Add routers to app
app.group('/api', app =>
  app.use(recipeRouter)
)

// Export configured Elysia app
export default app
