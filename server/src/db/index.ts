import postgres from 'postgres'

const devConfig: {
  user: string | undefined
  host: string | undefined
  database: string | undefined
  password: string | undefined
  port: number | undefined
} = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT)
}

const prodConfig = {
  connectionString: process.env.POSTGRES_URL
}

let sql = null

if (process.env.NODE_ENV === 'development') {
  console.log('Initializing dev database...')
  sql = postgres(devConfig)
}
else if (process.env.NODE_ENV === 'production') {
  console.log('Initializing prod database...')
  console.log(prodConfig)
  sql = postgres(prodConfig)
}

console.log('Database initialized.')

export default sql
