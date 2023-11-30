interface Ingredient {
  quantity: string
  unit: string
  ingredient: string
}

interface Steps {
  step: number
  description: string
}

interface RecipeObject {
  id: number
  imageUrl: string
  name: string
  rating: number
  profile: string
  description: string
  ingredients: Ingredient[]
  steps: Steps[]
}

interface ProfileButton {
  profile: string
  pressable: boolean
  onPress: () => void
}

interface RatingButton {
  rating: number
  pressable: boolean
  onPress: () => void
  style: StyleProp<ViewStyle>
}

interface StepNumberProps {
  stepNumber: number
  description: string
  onPress: () => void
  completed: boolean
}
