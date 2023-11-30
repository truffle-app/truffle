import sql from '../../../db'

const getRecipes = async () => {
  try {
    const recipes = await sql`
      SELECT * FROM recipe
    `
    return recipes.map(recipe => {
      return {...recipe, ingredients: {
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
    console.log(ingredients)
    const mappedRecipe = {
      ...recipe[0],
      ingredients: ingredients
    }
    console.log(mappedRecipe)
    return mappedRecipe
  } catch (error) {
    throw error
  }
}

const addRecipe = async (recipe: any) => {
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
      )
      VALUES (
        ${recipe.name},
        ${recipe.description},
        ${'vegan'},
        ${1},
        ${recipe.ingredients.map((recipe: any) => [recipe.quantity, recipe.unit, recipe.ingredient])},
        ${recipe.steps},
        ${recipe.rating},
        ${recipe.imageUrl}
      )
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
