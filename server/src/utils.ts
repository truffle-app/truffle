import userService from '@database/service/user'

export const isCorrectPassword = async (userId: string, password: string) => {
  const hash = await Bun.password.hash(password)
  const user: any = await userService.getUserByID(userId)
  return hash === user.hashed_password
}
