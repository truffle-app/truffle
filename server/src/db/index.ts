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

let sql = null

if (process.env.NODE_ENV === 'development') {
  console.log('Connecting to dev database...')
  sql = postgres(devConfig)
}
else if (process.env.NODE_ENV === 'production') {
  console.log('Connecting to prod database...')
  console.log(process.env.DATABASE_URL as string)
  sql = postgres(process.env.DATABASE_URL as string)
}

if (sql) {
  console.log('Connected to database.')
}
else {
  console.log('postgres not defined?')
}


export default sql
