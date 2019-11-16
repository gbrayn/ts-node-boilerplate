import server from './app'
import config from './config'

server.listen(config.app.PORT, err => {
  if (err) {
    console.log(`> Error: ${err.message}`)
  }
})
