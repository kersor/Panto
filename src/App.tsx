import React, { FC } from 'react'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

const App: FC = () => {
  return (
    <div className='relative'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App