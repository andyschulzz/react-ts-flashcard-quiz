import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1.5rem;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`

const Wrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;

  label {
    color: #777;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }
`

const Button = styled.button`
  background: hsl(200, 100%, 50%);
  color: white;
  padding: 0.5em 1em;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: hsl(200, 100%, 40%);
  }
`

export const S = { Form, Wrapper, Button }
