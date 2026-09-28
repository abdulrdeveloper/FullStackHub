import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='w-full'>
      <h1 className='text-4xl font-bold text-center text-green-500 py-3 mt-4 tracking-wide uppercase'>Tailwind Test</h1>
    </div>
  <Card />
  </>
)
