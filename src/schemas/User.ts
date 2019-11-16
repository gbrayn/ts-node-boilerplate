import mongoose, { Schema } from 'mongoose'
import * as yup from 'yup'
import { UserInterface } from '../interfaces'

const UserSchema: Schema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String
}, {
  timestamps: true
})

UserSchema.pre('validate', async function (next) {
  try {
    await yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      password: yup.string()
    }).validate(this)

    next()
  } catch (error) {
    next(error)
  }
})

export const User = mongoose.model<UserInterface>('User', UserSchema)
