// import React from 'react'
import { Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from '../client/components/Pages/Home'
import Memories from '../client/components/Pages/Memories'
import Songs from '../client/components/Pages/Songs'
import GuestList from '../client/components/Pages/GuestList'
import Contact from '../client/components/Pages/Contact'
import NoPage from '../client/components/Pages/NoPage'
import LayOut from '../client/components/LayOut'
// import AdminLogin from './AdminLogin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index element={<Home />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/guest-list" element={<GuestList />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/admin" element={<AdminLogin />} /> */}
      <Route path="*" element={<NoPage />} />
    </Route>,
  ),
)

export default router
