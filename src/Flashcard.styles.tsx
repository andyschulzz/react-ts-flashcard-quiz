import styled from 'styled-components'

interface Props {
  readonly flip: boolean
}

const Card = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  background: white;
  height: 150px;
  width: 150px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(1000px) ${(props) => props.flip && 'rotateY(180deg)'}
    translateY(var(--translate-y, 0));
  transition: 150ms;

  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 3, 0.5);
    --translate-y: -2px;
  }
`

const Front = styled.div`
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  left: 0;
`

const Back = styled.div`
  position: absolute;
  padding: 1rem;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`

const Options = styled.div`
  margin-top: 0.5rem;
`

const Option = styled.div`
  margin-top: 0.25rem;
  color: #555;
  font-size: 0.75rem;

  &:first-child {
    margin-top: 0;
  }
`

export const S = { Card, Front, Back, Options, Option }
