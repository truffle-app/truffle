import React, { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  input: {
    color: theme.colors.inputTextColor,
    textAlign: 'center',
    fontFamily: theme.fonts.mainFont,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.inputFontSize,
    borderColor: theme.colors.borderColor,
    borderWidth: theme.borders.borderWidth,
    borderRadius: theme.borders.borderRadius,
    padding: 10,
    backgroundColor: '#FFFFFF',
  }
})

const TextInput = ({ ...props }) => {
  return <NativeTextInput style={styles.input} selectionColor={theme.colors.primaryColor} {...props} />
}

export default TextInput
