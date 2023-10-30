import React, { View, Image, Text } from 'react-native'

const SmallRecipeDisplay = ({ recipe }: { recipe: any }) => {
  return (
    <View key={recipe.id}>
      <Image source={{ uri: recipe.imageUrl }} />
      <View>
        <Text>{recipe.title}</Text>
      </View>
    </View>
  )
}

export default SmallRecipeDisplay
