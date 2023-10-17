import React from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import LoginPage from './Pages/LoginPage'
import Feed from './Pages/FeedPage'
import Explore from './Pages/ExplorePage'
import Profile from './Pages/ProfilePage'


const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/feed" element={<Feed/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Main
