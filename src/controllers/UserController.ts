import { Request, Response } from 'express'

import { User } from '../schemas/User'

class UserController {
  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async index (req: Request, res: Response): Promise<Response> {
    const user = await User.find()

    return res.json(user)
  }
}

export default new UserController()
