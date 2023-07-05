import styled, { createGlobalStyle } from "styled-components"
import Player from "./components/Player"

const GlobalStyleAndVariables = createGlobalStyle<{}>`
  :root {
    --color-background-one: #0F0D13;
    --color-background-second: #2A2141;
    --color-text-gray-100: #E1E1E6;
    --color-gray-200: #D9D9D9;
    --color-gray-300: #C4C4CC;
    --color-text-gray-opacity: #e1e1e6aa;
  }

  * {
    margin: 0; padding: 0; border: 0; box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const Container = styled.div`
  background-color: var(--color-background-one);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-gray-100);
`

export default function App() {
  return (
    <>
      <Container>
        <Player />
      </Container>
      <GlobalStyleAndVariables />
    </>
  )
}