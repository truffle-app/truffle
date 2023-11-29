import { Navigate, Route, Routes } from 'react-router-native'
import AddRecipePage from './routes/AddRecipePage'
import DiscoverPage from './routes/DiscoverPage'
import RegisterPage from './routes/RegisterPage'
import ProfilePage from './routes/ProfilePage'
import RecipePage from './routes/RecipePage'
import LoginPage from './routes/LoginPage'
import Feed from './routes/FeedPage'
import React from 'react-native'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/recipe/add" element={<AddRecipePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Main
