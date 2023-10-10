import { execPath } from 'process'
import sql from '../../../db'

const getRecipes = async () => {
  try {
    const recipes = await sql`
      SELECT * FROM recipe
    `
    return recipes
  } catch(error) {
    throw error
  }

}

export default {
  getRecipes: getRecipes
}
