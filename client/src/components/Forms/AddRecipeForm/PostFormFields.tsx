import TextInput from '../../Input/TextInput'
import styled, { css } from '@emotion/native'
import { useField } from 'formik'
import React from 'react-native'

const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`

const PostFormFields = () => {
  const [postTextField, postTextMeta, postTextHelpers] = useField('post_text')

  return (
    <FormContainer>
      <TextInput
        style={css`
          width: 80%;
        `}
        placeholder="Post text ..."
        value={postTextField.value.toString()}
        onChangeText={(text: string) => postTextHelpers.setValue(text)}
      />
    </FormContainer>
  )
}

export default PostFormFields
