import styled from 'styled-components'

export const Container = styled.form`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0 0;
  margin: auto;
`

export const Input = styled.input`
  width: 80%;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px dotted;
  outline: none;
`

export const Button = styled.button`
  cursor: pointer;
  padding: .5rem 1rem;
  font-size: 1rem;
  color: gray;
  background-color: lightblue;
  border-radius: 1rem;
  border: none;
  outline: none;

  &:hover {
    background-color: blue;
    color: white;
  }
`
