import sql from '@database/.'
import { User } from '@types'

const getUserByID = async (id: string) => {
  try {
    return await sql`SELECT * FROM truffle_user WHERE id = ${id}`
  } catch (error) {
    throw error
  }
}

const addUser = async (user: User) => {
  try {
    return await sql`
      INSERT INTO truffle_user (
        email,
        hashed_password,
        username,
        bookmarks
      ) VALUES (
        ${user.email},
        ${user.hashed_password},
        ${user.username},
        ${[]}
      )
    `
  } catch (error) {
    throw error
  }
}

export default {
  getUserByID,
  addUser
}
