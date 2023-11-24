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

const getRecipeByID = async (id: string) => {
  try {
    const recipe = await sql`
      SELECT * FROM recipe WHERE id = ${id}
    `
    return recipe
  } catch (error) {
    throw error
  }
}

const addRecipe = async (recipe: any) => {
  try {
    const newRecipe = await sql`
      INSERT INTO recipe (name, description, diet, creator, ingredients, methods, rating, imageurl)
      VALUES (${recipe.name}, ${recipe.description}, ${'vegan'}, ${1}, ${recipe.ingredients}, ${recipe.methods}, ${recipe.rating}, ${recipe.imageurl})
    `
    return newRecipe
  } catch(error) {
    throw error
  }
}

export default {
  getRecipes: getRecipes,
  getRecipeByID: getRecipeByID,
  addRecipe: addRecipe
}
