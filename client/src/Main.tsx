import { Route, Routes, Navigate } from 'react-router-native'
import Discover from './routes/DiscoverPage'
import Profile from './routes/ProfilePage'
import LoginPage from './routes/LoginPage'
import Feed from './routes/FeedPage'
import Post from './routes/PostPage'
import React from 'react-native'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Main
