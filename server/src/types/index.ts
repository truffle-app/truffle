export interface User {
  email: string
  hashed_password: string
  username: string
}

export interface Recipe {
  name: string
  description: string
  diet: Diet
  creator: string
  ingredients: [string[]]
  steps: string[]
  rating: any
  imageUrl: string
}

export enum Diet {
  omnivorous = 'omnivorous',
  vegetarian = 'vegetarian',
  vegan = 'vegan'
}

export interface Bookmark {
  userId: string
  recipeId: string
}
