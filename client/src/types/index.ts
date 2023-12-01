export interface Ingredient {
  quantity: string
  unit: string
  ingredient: string
}

export interface Steps {
  step: number
  description: string
}

export interface RecipeObject {
  id: number
  imageUrl: string
  name: string
  rating: number
  profile: string
  description: string
  ingredients: Ingredient[]
  steps: Steps[]
}

export interface Bookmark {
  userId: number
  recipeId: number
}

export interface User {
  id?: number
  email?: string
  username: string
  password: string
}

export interface StyledSearchContainerProps {
  keyboardVisible: boolean
}
