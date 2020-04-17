import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  background: white;
  height: 150px;
  width: 150px;
`

const Front = styled.div`
  position: absolute;
  padding: 1rem;
`

const Back = styled.div`
  position: absolute;
  padding: 1rem;
`

const Options = styled.div``

const Option = styled.div``

export const S = { Card, Front, Back, Options, Option }
