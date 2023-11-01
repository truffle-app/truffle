import React from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import AddRecipePage from './routes/AddRecipePage'
import DiscoverPage from './routes/DiscoverPage'
import Feed from './routes/FeedPage'
import LoginPage from './routes/LoginPage'
import ProfilePage from './routes/ProfilePage'
import RecipePage from './routes/RecipePage'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
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
