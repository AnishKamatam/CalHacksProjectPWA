import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

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

// Sort alphabetically by name
languages.sort((a, b) => a.name.localeCompare(b.name))

function Home() {
  const navigate = useNavigate()
  const [fading, setFading] = useState(false)

  const handleBack = () => {
    navigate('/')
  }

  const handleLanguageClick = (language) => {
    setFading(true)
    setTimeout(() => {
      navigate('/learn', { state: { selectedLanguage: language } })
    }, 300)
  }

  return (
    <div className={`home ${fading ? 'fade-out' : ''}`}>
      <div className="home-header">
        <button className="back-button" onClick={handleBack}>
          ←
        </button>
      </div>
      
      <div className="home-content">
        <h1 className="home-title">Which language do you want to learn?</h1>
        
        <div className="languages-list">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="language-chip-home"
              onClick={() => handleLanguageClick(lang)}
            >
              <span className="flag-home">{lang.flag}</span>
              <span className="name-home">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
