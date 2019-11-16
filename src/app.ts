import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'
import config from './config'

class App {
  public server: express.Application

  public constructor () {
    this.server = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
  }

  private database (): void {
    mongoose.connect(config.db.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
    err => {
      if (err) {
        console.log(`> Error: ${err.message}`)
        process.exit(1)
      }
    })
  }

  private routes (): void {
    this.server.use('/api', routes)
  }
}

export default new App().server
