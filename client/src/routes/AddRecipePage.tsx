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
  name: '',
  description: '',
  tags: '',
  activeTab: 'Ingredients',
  ingredients: [{ quantity: '', unit: '', ingredient: '' }],
  methods: [''],
  post_text: '',
  rating: 3,
  imageUrl: 'https://img.ilcdn.fi/ggz4rnfnXvGUZIxsuSB61dJJf2M=/full-fit-in/920x0/img-s3.ilcdn.fi/66cd116ed50e1b40e6f2b7f7341f2da616c495c622dacb2746350268eaa797df.jpg'
}

const validationSchema = yup.object().shape({
  name: yup.string().min(4, 'Name must contain at least 4 characters')
})

const AddRecipePage = () => {
  const [page, setPage] = useState<number>(0)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async (values: any) => {
    const res = await recipeService.addRecipe(values)
    navigate('/feed')
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
