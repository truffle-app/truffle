import React from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import LoginPage from './Pages/LoginPage'
import Feed from './Pages/FeedPage'
import Discover from './Pages/DiscoverPage'
import Profile from './Pages/ProfilePage'
import Post from './Pages/PostPage'


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
