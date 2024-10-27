import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

const CheckerBoard = lazy(()=> import('./components/Checkerboard'))
const Home = lazy(()=> import('./components/Home'))

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkerboard" element={<CheckerBoard/>} />
          <Route path="*" element={<div>Not Found...</div>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
