import userService from '@database/service/user'

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

export default {
  getUserByID
}
