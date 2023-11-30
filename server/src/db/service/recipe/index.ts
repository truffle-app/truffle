import sql from '../../../db'

const getRecipes = async () => {
  try {
    const recipes = await sql`
      SELECT * FROM recipe
    `
    return recipes.map(recipe => {
      return {...recipe, imageUrl: recipe.image_url, ingredients: {
        quantity: recipe.ingredients[0],
        unit: recipe.ingredients[1],
        ingredient: recipe.ingredients[2]
      }}
    })
  } catch(error) {
    throw error
  }
}

const getRecipeByID = async (id: string) => {
  try {
    const recipe = await sql`
      SELECT * FROM recipe WHERE id = ${id}
    `
    const ingredients = recipe[0].ingredients.map((ingredientRow: any) => {
      return {
        quantity: ingredientRow[0],
        unit: ingredientRow[1],
        ingredient: ingredientRow[2]
      }
    })
    const mappedRecipe = {
      ...recipe[0],
      imageUrl: recipe[0].image_url,
      ingredients: ingredients
    }
    return mappedRecipe
  } catch (error) {
    throw error
  }
}

const getRecipesByUser = async (userId: string) => {
  try {
    const recipes = await sql`
      SELECT * FROM recipe WHERE creator = ${userId}
    `
    return recipes
  } catch (error) {
    throw error
  }
}

const addRecipe = async (recipe: Recipe) => {
  try {
    const newRecipe = await sql`
      INSERT INTO recipe (
        name,
        description,
        diet,
        creator,
        ingredients,
        steps,
        rating,
        image_url
      ) VALUES (
        ${recipe.name},
        ${recipe.description},
        ${Diet.omnivorous},
        ${recipe.creator},
        ${recipe.ingredients.map((recipe: any) => [recipe.quantity, recipe.unit, recipe.ingredient])},
        ${recipe.steps},
        ${recipe.rating},
        ${recipe.imageUrl}
      )
    `
    return newRecipe
  } catch (error) {
    throw error
  }
}

export default {
  getRecipes,
  getRecipeByID,
  getRecipesByUser,
  addRecipe
}
