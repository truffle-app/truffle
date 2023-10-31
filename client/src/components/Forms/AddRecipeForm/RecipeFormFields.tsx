import ScrollViewWrapper from '../../Wrappers/ScollViewWrapper'
import GreyAddButton from '../../Buttons/GreyAddButton'
import SectionNavbar from '../../Navbar/SectionNavbar'
import DeleteButton from '../../Buttons/DeleteButton'
import ImageInput from '../../Input/ImageInput'
import TextInput from '../../Input/TextInput'
import styled, { css } from '@emotion/native'
import { FieldArray, useField } from 'formik'
import PlainText from '../../Text/PlainText'
import React from 'react-native'

const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IngredientsRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ScrollableSpace = styled.View`
  margin-bottom: 300px;
`

const IncredientsSection = ({
  values,
  handleChange
}: {
  values: any
  handleChange: any
}) => {
  return (
    <FieldArray
      name="ingredients"
      render={({ push, remove }) => (
        <>
          {values.ingredients.map((ingredient: string, index: number) => (
            <IngredientsRowContainer key={index}>
              <DeleteButton onPress={() => remove(index)} />
              <TextInput
                onChangeText={handleChange(`ingredients[${index}].quantity`)}
                value={values.ingredients[index].quantity}
                placeholder="Qty."
                style={css`
                  width: 20%;
                `}
                keyboardType={'number-pad'}
              />
              <TextInput
                onChangeText={handleChange(`ingredients[${index}].unit`)}
                value={values.ingredients[index].unit}
                placeholder="Unit"
                style={css`
                  width: 20%;
                `}
                autoCapitalize="none"
              />
              <TextInput
                onChangeText={handleChange(`ingredients[${index}].ingredient`)}
                value={values.ingredients[index].ingredient}
                placeholder="Ingredient"
                style={css`
                  width: 40%;
                `}
                onSubmitEditing={() => {
                  push({ quantity: '', unit: '', ingredient: '' })
                }}
              />
            </IngredientsRowContainer>
          ))}
          <GreyAddButton
            onPress={() => push({ quantity: '', unit: '', ingredient: '' })}
          />
          <ScrollableSpace />
        </>
      )}
    />
  )
}

const MethodsSection = ({
  values,
  handleChange
}: {
  values: any
  handleChange: any
}) => {
  return (
    <FieldArray
      name="methods"
      render={({ push, remove }) => (
        <>
          {values.methods.map((method: string, index: number) => (
            <IngredientsRowContainer key={index}>
              <DeleteButton onPress={() => remove(index)} />
              <PlainText>{String(index + 1) + '.'}</PlainText>
              <TextInput
                onChangeText={handleChange(`methods[${index}].method`)}
                value={values.methods[index].method}
                placeholder="Type instructions here ..."
                style={css`
                  width: 74%;
                `}
                onSubmitEditing={() => {
                  push({ method: '' })
                }}
                autoFocus
              />
            </IngredientsRowContainer>
          ))}
          <GreyAddButton
            onPress={() => {
              push({ method: '' })
              values.methods
            }}
          />
          <ScrollableSpace />
        </>
      )}
    />
  )
}

const tabs = ['Ingredients', 'Methods']

const RecipeFormFields = ({ values, handleChange }: any) => {
  const [nameField, nameMeta, nameHelpers] = useField('name')
  const [descriptionField, descriptionMeta, descriptionHelpers] =
    useField('description')
  const [tagField, tagMeta, tagHelpers] = useField('tags')
  const [activeTab, activeTabMeta, activeTabHelpers] = useField('activeTab')

  return (
    <ScrollViewWrapper>
      <FormContainer>
        <ImageInput />
        <TextInput
          style={css`
            width: 80%;
          `}
          placeholder="name of the recipe"
          value={nameField.value.toString()}
          onChangeText={(text: string) => nameHelpers.setValue(text)}
        />
        <TextInput
          style={css`
            width: 80%;
            height: 80px;
          `}
          multiline={true}
          placeholder="description"
          value={descriptionField.value.toString()}
          onChangeText={(text: string) => descriptionHelpers.setValue(text)}
        />
        <TextInput
          style={css`
            width: 80%;
            margin-bottom: 8px;
          `}
          placeholder="#tags"
          value={tagField.value.toString()}
          onChangeText={(text: string) => tagHelpers.setValue(text)}
        />
        <SectionNavbar
          tabs={tabs}
          activeTab={values.activeTab}
          setActiveTab={(tab: string) => activeTabHelpers.setValue(tab)}
        />
        {activeTab.value === tabs[0] && (
          <IncredientsSection values={values} handleChange={handleChange} />
        )}
        {activeTab.value === tabs[1] && (
          <MethodsSection values={values} handleChange={handleChange} />
        )}
      </FormContainer>
    </ScrollViewWrapper>
  )
}

export default RecipeFormFields
