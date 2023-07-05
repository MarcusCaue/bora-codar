import styled from "styled-components"
import Controllers from "./Controllers";
import DurationBar from "./DurationBar";
import song from "../assets/sounds/audio.mp3"
import { useState } from "react";

const StyledPlayer = styled.div`
  background-color: var(--color-background-second);
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 80vh;
  border-radius: 0.6rem;
  padding: 2rem;
  gap: 1.7rem;

  > div {
    width: 100%;
  }
`
const StyledDataMusic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  #musicName {
    font-size: 1.45rem;
  }

  #bandName {
    font-size: 1.1rem;
    color: var(--color-text-gray-opacity);
  }
`

export default function Player() {
  const audio = new Audio(song)

  const [elapsedTime, setElapsedTime] = useState(0)
  const [timerId, setTimerId] = useState(0)

  const incrementSeconds = (currentTime: number) => {
    const thisTimerId = setInterval(() => {
      currentTime += 1
      setElapsedTime(currentTime)
      console.log(currentTime)
    }, 1000)

    console.log("Timer id startIncrement: " + thisTimerId);

    setTimerId(thisTimerId)
  }
  const stopIncrement = (thisTimerId: number) => {
    console.log("Timer id stopIncrement: " + thisTimerId);
    clearInterval(thisTimerId)
    console.log("Timer parou")
  }

  return (
    <StyledPlayer>
      <div>
        <img src="/src/assets/images/music_image.png" alt="Capa da música" />
      </div>

      <StyledDataMusic>
        <span id="musicName"> Acorda Devinho </span>
        <span id="bandName"> Banda Rocketseat </span>
      </StyledDataMusic>

      {<Controllers startTimer={() => incrementSeconds(elapsedTime)} stopTimer={() => stopIncrement(timerId)} audio={audio} />}

      {<DurationBar audio={audio} />}
    </StyledPlayer>
  )
}