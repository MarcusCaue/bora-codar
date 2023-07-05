import PlayBack from "../assets/icons/PlayBack"
import PlayForward from  "../assets/icons/PlayForward"
import Pause from  "../assets/icons/Pause"
import Play from  "../assets/icons/Play"
import styled from "styled-components"
import { useState } from "react"

const StyledControllers = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    background-color: transparent;
  }
`

interface ControllersProps {
  audio: HTMLAudioElement,
  stopTimer: Function,
  startTimer: Function
}

export default function Controllers( props : ControllersProps) {

  const [ isRunning, setRunning ] = useState(false)
  const [timerId, setTimerId] = useState(0)

  const incrementSeconds = (currentTime: number) => {
    const thisTimerId = setInterval(() => {
      currentTime += 1
    }, 1000)

    setTimerId(thisTimerId)
  }
  const stopIncrement = (thisTimerId: number) => {
    clearInterval(thisTimerId)
    console.log(props.audio.currentTime);
  }

  return (
    <StyledControllers>
      <PlayBack actionFunction={ () => console.log("Voltar atrás") } />

      {
        isRunning ? 
        <Pause actionFunction={ () => { 
          props.audio.pause(); 
          // props.stopTimer();
          stopIncrement(timerId) 
          setRunning(false); 
        }} />
        : 
        <Play actionFunction={ async () => { 
          await props.audio.play(); 
          incrementSeconds(props.audio.currentTime)
          setRunning(true) 
        }} /> 
      }

      <PlayForward actionFunction={ () => console.log("Voltar atrás")  } />
    </StyledControllers>
  )
}