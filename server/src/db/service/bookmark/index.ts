import { Bookmark } from '@types'
import sql from '../../../db'

const getBookmarksByUser = async (userId: string) => {
  try {
    const bookmarks = await sql`
      SELECT recipe.* FROM bookmark
      JOIN recipe ON bookmark.recipe_id = recipe.id
      WHERE user_id = ${userId}
    `
    return bookmarks.map((recipe) => {
      return {
        ...recipe,
        imageUrl: recipe.image_url,
        ingredients: {
          quantity: recipe.ingredients[0],
          unit: recipe.ingredients[1],
          ingredient: recipe.ingredients[2]
        }
      }
    })
  } catch (error) {
    throw error
  }
}

const addBookmark = async (bookmark: Bookmark) => {
  try {
    return await sql`
      INSERT INTO bookmark (
        user_id,
        recipe_id
      ) VALUES (
        ${bookmark.userId},
        ${bookmark.recipeId}
      )
    `
  } catch (error) {
    throw error
  }
}

export default { getBookmarksByUser, addBookmark }
