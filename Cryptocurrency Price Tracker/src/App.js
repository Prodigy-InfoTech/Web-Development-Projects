import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItemPage from './pages/ItemPage'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-slate-950 min-h-[100vh]">
      <BrowserRouter>
        <Header />
        <div className='pt-16'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<ItemPage />} />
        </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App