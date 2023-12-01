import { Bookmark } from '@types'
import sql from '../../../db'

const getBookmarksByUser = async (userId: string) => {
  try {
    return await sql`
      SELECT recipe.* FROM bookmark WHERE user = ${userId} JOIN recipe ON bookmark.recipe = recipe.id
    `
  } catch (error) {
    throw error
  }
}

const addBookmark = async (bookmark: Bookmark) => {
  try {
    return await sql`
      INSERT INTO bookmark (
        user,
        recipe
      ) VALUES (
        ${bookmark.userId},
        ${bookmark.recipeId},
      )
    `
  } catch (error) {
    throw error
  }
}

export default { getBookmarksByUser, addBookmark }
