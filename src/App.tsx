import React, { useState, useEffect, useRef } from 'react'
import FlashcardList from './FlashcardList'
import Form from './Form'
import axios from 'axios'
import { S } from './App.styles'

const App: React.FC = () => {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef<HTMLSelectElement>(null)
  const amountEl = useRef<HTMLInputElement>(null)

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
    axios.get('https://opentdb.com/api_category.php').then((res) => {
      setCategories(res.data.trivia_categories)
    })
  }, [])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (amountEl.current && categoryEl.current) {
      axios
        .get('https://opentdb.com/api.php', {
          params: {
            amount: amountEl.current.value,
            category: categoryEl.current.value,
          },
        })
        .then((res) => {
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
                answer: answer,
                options: options.sort(() => Math.random() - 0.5),
              }
            })
          )
        })
    }
  }

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        categories={categories}
        categoryEl={categoryEl}
        amountEl={amountEl}
      />
      <S.Container>
        <FlashcardList flashcards={flashcards} />
      </S.Container>
    </>
  )
}

export default App
