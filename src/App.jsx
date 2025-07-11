import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AuthProvider from './contexts/AuthProvider'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserInfo from './pages/UserInfo'
import UserList from './pages/UserList'

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='sign-in' element={<SignIn/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
          <Route path='user-info' element={<UserInfo/>}/>
          <Route path='user-list' element={<UserList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App