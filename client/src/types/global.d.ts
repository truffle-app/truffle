interface Ingredients {
  quantity: string
  unit: string
  name: string
}

interface Methods {
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
  ingredients: Ingredients[]
  methods: Methods[]
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
