import userService from '@database/service/user'

export const verifyPassword = async (userId: string, password: string) => {
  const user: any = await userService.getUserByID(userId)
  return Bun.password.verify(password, user[0].hashed_password)
}
