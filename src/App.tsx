import React, { useState } from 'react'
import FlashcardList from './FlashcardList'

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 4+4?',
    answer: '8',
    options: ['2', '4', '5'],
  },
  {
    id: 2,
    question: 'What is 8+8?',
    answer: '8',
    options: ['2', '4', '5'],
  },
]

interface Props {}

const App: React.FC = (props: Props) => {
  const [flashcards, setFlascards] = useState(SAMPLE_FLASHCARDS)
  return <FlashcardList flashcards={flashcards} />
}

export default App
