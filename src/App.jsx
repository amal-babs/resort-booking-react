import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ADMIN } from './routes/pathname';
import AdminLayout from './AdminLayout/AdminLayout';
import { Toaster } from "react-hot-toast";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App
