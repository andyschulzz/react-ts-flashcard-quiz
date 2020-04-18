import React from 'react'
import { S } from './Form.styles'

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  categories: { id: number; name: string }[]
  categoryEl: React.RefObject<HTMLSelectElement>
  amountEl: React.RefObject<HTMLInputElement>
}

const Form: React.FC<Props> = ({
  handleSubmit,
  categories,
  categoryEl,
  amountEl,
}: Props) => {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Wrapper>
        <label htmlFor="category">Category</label>
        <select id="category" ref={categoryEl}>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>
      </S.Wrapper>
      <S.Wrapper>
        <label htmlFor="amount">Number of Questions</label>
        <input
          type="number"
          id="amount"
          min="1"
          step="1"
          defaultValue={10}
          ref={amountEl}
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.Button>Generate</S.Button>
      </S.Wrapper>
    </S.Form>
  )
}

export default Form
