import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Lightbulb, Home, Car, Users, Laptop, Keyboard, Wine, Coffee, TreePine, Backpack, Shirt, Wallet } from 'lucide-react'
import './App.css'

const flashcards = [
  { translation: 'light', spanish: 'luz', pronunciation: 'loos', icon: Lightbulb },
  { translation: 'home', spanish: 'casa', pronunciation: 'kah-sah', icon: Home },
  { translation: 'car', spanish: 'coche', pronunciation: 'koh-cheh', icon: Car },
  { translation: 'person', spanish: 'persona', pronunciation: 'pehr-soh-nah', icon: Users },
  { translation: 'laptop', spanish: 'portátil', pronunciation: 'pohr-tah-teel', icon: Laptop },
  { translation: 'keyboard', spanish: 'teclado', pronunciation: 'teh-klah-doh', icon: Keyboard },
  { translation: 'bottle', spanish: 'botella', pronunciation: 'boh-teh-yah', icon: Wine },
  { translation: 'cup', spanish: 'taza', pronunciation: 'tah-sah', icon: Coffee },
  { translation: 'plant', spanish: 'planta', pronunciation: 'plahn-tah', icon: TreePine },
  { translation: 'backpack', spanish: 'mochila', pronunciation: 'moh-chee-lah', icon: Backpack },
  { translation: 'jacket', spanish: 'chaqueta', pronunciation: 'chah-keh-tah', icon: Shirt },
  { translation: 'wallet', spanish: 'cartera', pronunciation: 'kahr-teh-rah', icon: Wallet },
]

function FlashcardDetail() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const initialIndex = location.state?.cardIndex || 0
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const currentCard = flashcards[currentIndex]
  const IconComponent = currentCard.icon

  const handleBack = () => {
    navigate('/learn')
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleCardClick = (e) => {
    e.stopPropagation()
    setIsFlipped(!isFlipped)
  }

  const handleLeftAreaClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleRightAreaClick = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    }
  }

  return (
    <div className="flashcard-detail">
      <div className="flashcard-detail-header">
        <button className="back-button" onClick={handleBack}>
          <ArrowLeft size={20} />
        </button>
        <div className="progress-indicator">
          {currentIndex + 1}/{flashcards.length}
        </div>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
        ></div>
      </div>

      <div className="question-text">What do you see?</div>

      <div className="flashcard-wrapper">
        <div 
          className="navigation-area left-area"
          onClick={handleLeftAreaClick}
        ></div>
        
        <div 
          className="flashcard-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleCardClick}
        >
          <div className={`flashcard-large ${isFlipped ? 'flipped' : ''}`}>
            <div className="flashcard-front">
              <div className="flashcard-icon-large">
                <IconComponent size={80} />
              </div>
              <div className="flashcard-word-large">
                {currentCard.translation}
              </div>
            </div>
            <div className="flashcard-back">
              <div className="flashcard-icon-large">
                <IconComponent size={80} />
              </div>
              <div className="flashcard-word-large">
                {currentCard.spanish}
              </div>
              <div className="flashcard-pronunciation">
                {currentCard.pronunciation}
              </div>
            </div>
          </div>
        </div>

        <div 
          className="navigation-area right-area"
          onClick={handleRightAreaClick}
        ></div>
      </div>
    </div>
  )
}

export default FlashcardDetail
