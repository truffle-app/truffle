interface Ingredient {
  quantity: number
  unit: string
  name: string
}

interface Method {
  step: number
  description: string
}

interface RecipeObject {
  id: number
  imageurl: string
  name: string
  rating: number
  profile: string
  description: string
  ingredients: Ingredient[]
  method: Method[]
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

interface MethodStepProps {
  stepNumber: number
  description: string
  onPress: () => void
  completed: boolean
}
