import userService from '@database/service/user'
import { isCorrectPassword } from '../utils';

const getUserByID = async ({ params, set }: { params: any; set: any }) => {
  try {
    const user = await userService.getUserByID(params.id)
    set.status = 200
    return user
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

const login = async ({
  params,
  set,
  body
}: {
  params: any
  set: any
  body: any
}) => {
  try {
    const user: any = await userService.getUserByUsername(body.credentials.username)
    if (await isCorrectPassword(user.id, body.credentials.password)) {
      set.status = 200
      return user
    } else {
      set.status = 500
      return ''
    }
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

const addUser = async ({
  params,
  set,
  body
}: {
  params: any
  set: any
  body: any
}) => {
  try {
    const hash = await Bun.password.hash(body.user.password)
    const newUser = {
      email: body.user.email,
      username: body.user.username,
      hashed_password: hash
    }
    const user = await userService.addUser(newUser)
    set.status = 200
    return user
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

export default { getUserByID, login, addUser }
