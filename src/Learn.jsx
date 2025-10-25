import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Learn() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('flashcards')

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <div className="learn">
      <div className="learn-header">
        <button className="back-button" onClick={handleBack}>
          ←
        </button>
      </div>

      <div className="learn-content">
        {/* Content area - empty for now */}
      </div>

      <div className="tab-bar">
        <button 
          className={`tab-button ${activeTab === 'flashcards' ? 'active' : ''}`}
          onClick={() => setActiveTab('flashcards')}
        >
          Flashcards
        </button>
        <button 
          className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          Quiz
        </button>
        <button 
          className={`tab-button ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          Practice
        </button>
      </div>
    </div>
  )
}

export default Learn
