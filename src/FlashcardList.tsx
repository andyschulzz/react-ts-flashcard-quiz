import React from 'react'
import { S } from './FlashcardList.styles'
import Flashcard from './Flashcard'

// Other Option:
// interface FlashcardsProps {
//   id: number
//   question: string
//   answer: string
//   options: string[]
// }
// interface Props {
//   flashcards: FlashcardsProps[]
// }

interface Props {
  flashcards: {
    id: number
    question: string
    answer: string
    options: string[]
  }[]
}

const FlashcardList: React.FC<Props> = ({ flashcards }: Props) => {
  return (
    <S.CardGrid>
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </S.CardGrid>
  )
}

export default FlashcardList
