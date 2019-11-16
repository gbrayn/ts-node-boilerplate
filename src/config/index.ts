import dotenv from 'dotenv'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

const { PORT, DB_URI: URI } = process.env

export default {
  app: {
    PORT
  },
  db: {
    URI
  }
}
