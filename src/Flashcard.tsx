import React, { useState, useEffect, useRef } from 'react'
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
  const [height, setHeight] = useState(0)

  const frontEl = useRef<HTMLDivElement>(null)
  const backEl = useRef<HTMLDivElement>(null)

  function setMaxHeight(): void {
    if (frontEl.current && backEl.current) {
      const frontHeight = frontEl.current.getBoundingClientRect().height
      const backHeight = backEl.current.getBoundingClientRect().height
      setHeight(Math.max(frontHeight, backHeight, 100))
    }
  }

  useEffect(setMaxHeight, [
    flashcard.question,
    flashcard.answer,
    flashcard.options,
  ])

  return (
    <S.Card
      flip={flip}
      onClick={(): void => setFlip(!flip)}
      style={{ height: height }}
    >
      <S.Front ref={frontEl}>
        {flashcard.question}
        <S.Options>
          {flashcard.options.map((option) => {
            return <S.Option key={flashcard.id}>{option}</S.Option>
          })}
        </S.Options>
      </S.Front>
      <S.Back ref={backEl}>{flashcard.answer}</S.Back>
    </S.Card>
  )
}

export default Flashcard
