import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './view/HomeView'
import CreateItemView from './view/CreateItemView'
import "./asset/css/Reset.css"
import MainView from './view/MainView'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/main" element={<MainView/>} />
        <Route path="/create" element={<CreateItemView/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App