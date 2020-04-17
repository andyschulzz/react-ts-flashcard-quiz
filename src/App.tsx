import React, { useState, useEffect } from 'react'
import FlashcardList from './FlashcardList'
import axios from 'axios'
import { S } from './App.styles'

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
    answer: '16',
    options: ['Answ1', 'Answ2', 'Answ3'],
  },
]

const App: React.FC = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  function decodeString(str: string): string {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }
  interface Card {
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      setFlashcards(
        res.data.results.map((card: Card, index: number) => {
          const answer = decodeString(card.correct_answer)
          const options = [
            ...card.incorrect_answers.map((answer: string) =>
              decodeString(answer)
            ),
            answer,
          ]
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(card.question),
            answer: card.correct_answer,
            options: options.sort(() => Math.random() - 0.5),
          }
        })
      )
    })
  }, [])

  return (
    <S.Container>
      <FlashcardList flashcards={flashcards} />
    </S.Container>
  )
}

export default App
