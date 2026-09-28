import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/layout.jsx'
import Home from './pages/home.jsx'
import Stopwatch from './pages/stopwatch.jsx'
import Timer from './pages/timer.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stop-watch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Layout>
  )
}

export default App