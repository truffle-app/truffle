import postgres from 'postgres'

const devConfig: {
  user: string | undefined,
  host: string | undefined,
  database: string | undefined,
  password: string | undefined,
  port: number | undefined
} = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT)
}

const prodConfig = {
  connectionString: process.env.DATABASE_URL
}

const sql = postgres(devConfig)

export default sql
