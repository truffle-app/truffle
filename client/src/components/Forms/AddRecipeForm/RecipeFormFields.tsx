import ScrollViewWrapper from '@components/Wrappers/ScollViewWrapper'
import GreyAddButton from '@components/Buttons/GreyAddButton'
import SectionNavbar from '@components/Navbar/SectionNavbar'
import DeleteButton from '@components/Buttons/DeleteButton'
import ImageInput from '@components/Input/ImageInput'
import TextInput from '@components/Input/TextInput'
import PlainText from '@components/Text/PlainText'
import { useTranslation } from 'react-i18next'
import styled, { css } from '@emotion/native'
import { FieldArray, useField } from 'formik'
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

const StepsSection = ({
  values,
  handleChange
}: {
  values: any
  handleChange: any
}) => {
  return (
    <FieldArray
      name="steps"
      render={({ push, remove }) => (
        <>
          {values.steps.map((step: string, index: number) => (
            <IngredientsRowContainer key={index}>
              <DeleteButton onPress={() => remove(index)} />
              <PlainText>{String(index + 1) + '.'}</PlainText>
              <TextInput
                onChangeText={handleChange(`steps[${index}]`)}
                value={values.steps[index]}
                placeholder="Type instructions here ..."
                style={css`
                  width: 74%;
                `}
                onSubmitEditing={() => {
                  push('')
                }}
                autoFocus
              />
            </IngredientsRowContainer>
          ))}
          <GreyAddButton
            onPress={() => {
              push('')
            }}
          />
          <ScrollableSpace />
        </>
      )}
    />
  )
}

const RecipeFormFields = ({ values, handleChange }: any) => {
  const [imageField, imageMeta, imageHelpers] = useField('image')
  const [nameField, nameMeta, nameHelpers] = useField('name')
  const [descriptionField, descriptionMeta, descriptionHelpers] =
    useField('description')
  const [activeTab, activeTabMeta, activeTabHelpers] = useField('activeTab')
  const { t } = useTranslation()

  const tabs = [t('ingredients'), t('steps')]

  return (
    <ScrollViewWrapper>
      <FormContainer>
        <ImageInput />
        <TextInput
          style={css`
            width: 80%;
          `}
          placeholder={t('recipe-name')}
          value={nameField.value?.toString()}
          onChangeText={(text: string) => nameHelpers.setValue(text)}
        />
        <TextInput
          style={css`
            width: 80%;
            height: 80px;
          `}
          multiline={true}
          placeholder={t('description')}
          value={descriptionField.value?.toString()}
          onChangeText={(text: string) => descriptionHelpers.setValue(text)}
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
          <StepsSection values={values} handleChange={handleChange} />
        )}
      </FormContainer>
    </ScrollViewWrapper>
  )
}

export default RecipeFormFields
