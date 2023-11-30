import { StyleProp, ViewStyle } from 'react-native'

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

export interface StyledSearchContainerProps {
  keyboardVisible: boolean
}
