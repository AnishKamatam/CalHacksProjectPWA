import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import logoImage from '/image.png'

const languages = [
  { flag: '🇺🇸', name: 'English' },
  { flag: '🇪🇸', name: 'Spanish' },
  { flag: '🇫🇷', name: 'French' },
  { flag: '🇩🇪', name: 'German' },
  { flag: '🇮🇹', name: 'Italian' },
  { flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇨🇳', name: 'Chinese' },
  { flag: '🇰🇷', name: 'Korean' },
  { flag: '🇧🇷', name: 'Portuguese' },
  { flag: '🇷🇺', name: 'Russian' },
  { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇮🇳', name: 'Tamil' },
  { flag: '🇮🇳', name: 'Bengali' },
  { flag: '🇮🇳', name: 'Telugu' },
  { flag: '🇮🇳', name: 'Kannada' },
  { flag: '🇮🇳', name: 'Malayalam' },
  { flag: '🇵🇰', name: 'Urdu' },
  { flag: '🇹🇭', name: 'Thai' },
  { flag: '🇻🇳', name: 'Vietnamese' },
  { flag: '🇮🇩', name: 'Indonesian' },
  { flag: '🇬🇷', name: 'Greek' },
  { flag: '🇹🇷', name: 'Turkish' },
  { flag: '🇵🇱', name: 'Polish' },
  { flag: '🇳🇱', name: 'Dutch' },
  { flag: '🇸🇪', name: 'Swedish' },
  { flag: '🇩🇰', name: 'Danish' },
  { flag: '🇮🇱', name: 'Hebrew' },
  { flag: '🇸🇦', name: 'Arabic' },
  { flag: '🇮🇷', name: 'Persian' },
  { flag: '🇪🇬', name: 'Arabic (Egyptian)' },
  { flag: '🇳🇬', name: 'Yoruba' },
  { flag: '🇪🇹', name: 'Amharic' },
  { flag: '🇿🇦', name: 'Zulu' },
  { flag: '🇰🇪', name: 'Swahili' },
  { flag: '🇮🇸', name: 'Icelandic' },
  { flag: '🇫🇮', name: 'Finnish' },
  { flag: '🇭🇺', name: 'Hungarian' },
  { flag: '🇺🇦', name: 'Ukrainian' },
  { flag: '🇮🇪', name: 'Irish' },
]

function App() {
  const [direction, setDirection] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setDirection(Math.random() > 0.5)
  }, [])

  const handleTap = () => {
    navigate('/home')
  }

  return (
    <div className="app" onClick={handleTap}>
      <div className="container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1 className="title">Moli</h1>
        <p className="tagline">The world becomes your classroom.</p>
      </div>
      
      <div className="languages-container">
        <div className={`languages-track ${direction ? 'scroll-right' : 'scroll-left'}`}>
          {[...languages, ...languages, ...languages].map((lang, index) => (
            <div key={index} className="language-chip">
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
