import { emailRegExp } from '../constants/reg-exp'

export const isEmailValid = (email) => {
  return emailRegExp.test(email)
}
