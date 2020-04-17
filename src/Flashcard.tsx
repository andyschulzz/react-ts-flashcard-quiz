import React, { useState } from 'react'
import { S } from './Flashcard.styles'

interface Props {
  flashcard: {
    id: number
    question: string
    answer: string
    options: string[]
  }
}

const Flashcard: React.FC<Props> = ({ flashcard }: Props) => {
  const [flip, setFlip] = useState(false)
  return (
    <S.Card flip={flip} onClick={(): void => setFlip(!flip)}>
      <S.Front>
        {flashcard.question}
        <S.Options>
          {flashcard.options.map((option) => {
            return <S.Option>{option}</S.Option>
          })}
        </S.Options>
      </S.Front>
      <S.Back>{flashcard.answer}</S.Back>
    </S.Card>
  )
}

export default Flashcard
