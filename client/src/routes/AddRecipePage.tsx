import RecipeFormFields from '../components/Forms/AddRecipeForm/RecipeFormFields'
import { HeaderWrapperSpaceBetween } from '../components//Wrappers/HeaderWrapper'
import NavBackButton from '../components//Buttons/NavBackButton'
import SubmitButton from '../components//Buttons/SubmitButton'
import recipeService from '../services/recipeService'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import Title from '../components//Text/Title'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

export interface FormValues {
  name: string
  description: string
  activeTab: string
  ingredients: [{ quantity: string; unit: string; ingredient: string }]
  steps: string[]
}

const initialValues = {
  name: '',
  description: '',
  activeTab: 'Ingredients',
  ingredients: [{ quantity: '', unit: '', ingredient: '' }],
  steps: [''],
  post_text: '',
  rating: 3,
  imageUrl:
    'https://assets.bonappetit.com/photos/58c97bc548ee007350aee2d6/16:9/w_1600%2Cc_limit/one-skillet-chicken-with-buttery-orzo.jpg'
}

const validationSchema = yup.object().shape({
  name: yup.string().min(4, 'Name must contain at least 4 characters')
})

const AddRecipePage = () => {
  const [page, setPage] = useState<number>(0)
  const [submitAllowed, setSubmitAllowed] = useState<boolean>(true)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async (values: any) => {
    try {
      setSubmitAllowed(false)
      const res = await recipeService.addRecipe(values)
      if (res?.status === 200) {
        navigate('/feed')
      } else {
        setSubmitAllowed(true)
      }
    } catch (error) {
      console.error(error)
      setSubmitAllowed(true)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values)
      }}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleSubmit }) =>
        page === 0 && (
          <>
            <HeaderWrapperSpaceBetween>
              <NavBackButton />
              <Title>{t('add-recipe')}</Title>
              <SubmitButton enabled={submitAllowed} onPress={handleSubmit}>
                Post
              </SubmitButton>
            </HeaderWrapperSpaceBetween>

            <RecipeFormFields values={values} handleChange={handleChange} />
          </>
        )
      }
    </Formik>
  )
}

export default AddRecipePage
