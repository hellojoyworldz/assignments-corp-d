import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import ErrorPage404 from './pages/ErrorPage/ErrorPage404.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </>
  )
}

export default App
