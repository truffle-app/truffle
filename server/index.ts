import app from './src/app'

// Start server
app.listen(Number(process.env.PORT), () => {
  console.log(
    `Server is running at ${app.server?.hostname}:${app.server?.port}`
  )
})

export default app
