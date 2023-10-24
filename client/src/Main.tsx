import React from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import LoginPage from './routes/LoginPage'
import Feed from './routes/FeedPage'
import Discover from './routes/DiscoverPage'
import Profile from './routes/ProfilePage'
import Post from './routes/PostPage'


const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/feed" element={<Feed/>} />
      <Route path="/discover" element={<Discover/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Main
