import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Learn from './Learn.jsx'
import FlashcardDetail from './FlashcardDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/flashcard-detail" element={<FlashcardDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
)
