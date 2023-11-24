import RecipeFormFields from '../components/Forms/AddRecipeForm/RecipeFormFields'
import { HeaderWrapperSpaceBetween } from '../components/Wrappers/HeaderWrapper'
import PostFormFields from '../components/Forms/AddRecipeForm/PostFormFields'
import NavBackButton from '../components/Buttons/NavBackButton'
import SubmitButton from '../components/Buttons/SubmitButton'
import BackButton from '../components/Buttons/BackButton'
import recipeService from '../services/recipeService'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import Title from '../components/Text/Title'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

export interface FormValues {
  name: string
  description: string
  tags: string
  activeTab: string
  ingredients: [{ quantity: string; unit: string; ingredient: string }]
  methods: [{ method: string }]
}

const initialValues = {
  title: '',
  description: '',
  tags: '',
  activeTab: 'Ingredients',
  ingredients: [{ quantity: '', unit: '', ingredient: '' }],
  methods: [''],
  post_text: ''
}

const validationSchema = yup.object().shape({
  name: yup.string().min(4, 'Name must contain at least 4 characters')
})

const AddRecipePage = () => {
  const [page, setPage] = useState<number>(0)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async (values: any) => {
    console.log(`Submitted a recipe.`)
    console.log(values)
    const res = await recipeService.addRecipe(values)
    navigate('/feed')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values)
        // Handle form submission logic here
        console.log(values)
      }}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleSubmit }) =>
        (page === 0 && (
          <>
            <HeaderWrapperSpaceBetween>
              <NavBackButton />
              <Title>{t('add-recipe')}</Title>
              <SubmitButton onPress={handleSubmit}>Post</SubmitButton>
            </HeaderWrapperSpaceBetween>

            <RecipeFormFields values={values} handleChange={handleChange} />
          </>
        )) ||
        (page === 1 && (
          <>
            <HeaderWrapperSpaceBetween>
              <BackButton onPress={() => setPage(0)} />
              <Title>{t('post-recipe')}</Title>
              <SubmitButton onPress={handleSubmit}>Post</SubmitButton>
            </HeaderWrapperSpaceBetween>

            <PostFormFields />
          </>
        ))
      }
    </Formik>
  )
}

export default AddRecipePage
