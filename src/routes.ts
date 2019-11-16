import { Router } from 'express'

import { UserController } from './controllers'

const routes = Router()

routes.get('/', (req, res) => res.send('Tic prey'))

routes.route('/users')
  .post(UserController.store)
  .get(UserController.index)

export default routes
