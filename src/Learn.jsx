import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Lightbulb, Home, Car, Users, Laptop, Keyboard, ChevronDown, Wine, Coffee, TreePine, Backpack, Shirt, Wallet } from 'lucide-react'
import './App.css'

function Learn() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('flashcards')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  
  const selectedLanguage = location.state?.selectedLanguage || { flag: '🇪🇸', name: 'Spanish' }

  const languages = [
    { flag: '🇸🇦', name: 'Arabic' },
    { flag: '🇪🇬', name: 'Arabic' },
    { flag: '🇮🇳', name: 'Bengali' },
    { flag: '🇨🇳', name: 'Chinese' },
    { flag: '🇩🇰', name: 'Danish' },
    { flag: '🇳🇱', name: 'Dutch' },
    { flag: '🇺🇸', name: 'English' },
    { flag: '🇪🇹', name: 'Amharic' },
    { flag: '🇫🇮', name: 'Finnish' },
    { flag: '🇫🇷', name: 'French' },
    { flag: '🇩🇪', name: 'German' },
    { flag: '🇬🇷', name: 'Greek' },
    { flag: '🇮🇱', name: 'Hebrew' },
    { flag: '🇮🇳', name: 'Hindi' },
    { flag: '🇭🇺', name: 'Hungarian' },
    { flag: '🇮🇸', name: 'Icelandic' },
    { flag: '🇮🇩', name: 'Indonesian' },
    { flag: '🇮🇪', name: 'Irish' },
    { flag: '🇮🇹', name: 'Italian' },
    { flag: '🇯🇵', name: 'Japanese' },
    { flag: '🇮🇳', name: 'Kannada' },
    { flag: '🇰🇷', name: 'Korean' },
    { flag: '🇮🇳', name: 'Malayalam' },
    { flag: '🇮🇳', name: 'Tamil' },
    { flag: '🇵🇰', name: 'Urdu' },
    { flag: '🇮🇷', name: 'Persian' },
    { flag: '🇵🇱', name: 'Polish' },
    { flag: '🇧🇷', name: 'Portuguese' },
    { flag: '🇷🇺', name: 'Russian' },
    { flag: '🇪🇸', name: 'Spanish' },
    { flag: '🇰🇪', name: 'Swahili' },
    { flag: '🇸🇪', name: 'Swedish' },
    { flag: '🇹🇭', name: 'Thai' },
    { flag: '🇮🇳', name: 'Telugu' },
    { flag: '🇹🇷', name: 'Turkish' },
    { flag: '🇺🇦', name: 'Ukrainian' },
    { flag: '🇻🇳', name: 'Vietnamese' },
    { flag: '🇳🇬', name: 'Yoruba' },
    { flag: '🇿🇦', name: 'Zulu' },
  ]

  const flashcards = [
    { translation: 'light', icon: Lightbulb },
    { translation: 'home', icon: Home },
    { translation: 'car', icon: Car },
    { translation: 'person', icon: Users },
    { translation: 'laptop', icon: Laptop },
    { translation: 'keyboard', icon: Keyboard },
    { translation: 'bottle', icon: Wine },
    { translation: 'cup', icon: Coffee },
    { translation: 'plant', icon: TreePine },
    { translation: 'backpack', icon: Backpack },
    { translation: 'jacket', icon: Shirt },
    { translation: 'wallet', icon: Wallet },
  ]

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
        {activeTab === 'flashcards' && (
          <div className="flashcards-container">
            <div className="flashcards-header">
              <h2 className="flashcards-title">Your words</h2>
              <div className="language-selector" onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
                <span className="language-flag">{selectedLanguage.flag}</span>
                <span className="language-name">{selectedLanguage.name}</span>
                <ChevronDown size={16} className="dropdown-arrow" />
              </div>
              {showLanguageDropdown && (
                <div className="language-dropdown">
                  {languages.map((lang, index) => (
                    <div key={index} className="language-option" onClick={() => setShowLanguageDropdown(false)}>
                      <span className="language-flag">{lang.flag}</span>
                      <span className="language-name">{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
              <p className="flashcards-date">Yesterday</p>
            </div>
            
            <div className="flashcards-grid">
              {flashcards.map((card, index) => {
                const IconComponent = card.icon
                return (
                  <div 
                    key={index} 
                    className="flashcard"
                    onClick={() => navigate('/flashcard-detail', { state: { cardIndex: index } })}
                  >
                    <div className="flashcard-content">
                      <div className="flashcard-icon">
                        <IconComponent size={32} />
                      </div>
                      <div className="flashcard-translation">{card.translation}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {activeTab === 'quiz' && <p>Quiz content coming soon...</p>}
        {activeTab === 'practice' && <p>Practice content coming soon...</p>}
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
