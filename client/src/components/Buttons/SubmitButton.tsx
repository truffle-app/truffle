import React, { View, Pressable, StyleSheet } from 'react-native'
import BigText from '../Text/BigText'
import theme from '../../theme'


const styles = StyleSheet.create({
  submitButton: {
    borderColor: theme.colors.borderColor,
    borderWidth: theme.borders.borderWidth,
    borderRadius: theme.borders.borderRadius,
    backgroundColor: '#FFFFFF',
    padding: 10,
  }
})

const SubmitButton = ({text, onSubmit, style}: {text: string, onSubmit: () => void, style: any}) => {
  return (
    <View style={style}>
      <Pressable style={[styles.submitButton]} onPress={onSubmit}>
        <BigText textColor={theme.colors.inputTextColor}>{text}</BigText>
      </Pressable>
    </View>
  )
}

export default SubmitButton
