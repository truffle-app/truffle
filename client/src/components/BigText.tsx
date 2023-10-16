import React, { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.headerTextColor,
    fontFamily: 'Josefin Sans',
    fontWeight: 'bold',
    fontSize: theme.fontSizes.headerFontSize,
  }
})

const BigText = ({ ...props }) => {
  return <Text style={styles.text} {...props} />
}

export default BigText
