import { useState } from "react"
import { styled } from "styled-components"

const Bar = styled.div`
  background-color: var(--color-text-gray-opacity);
  height: 0.4rem;
  border-radius: 0.6rem;
`
const ElapsedTime = styled.div`
  background-color: var(--color-text-gray-100);
  width: 10%;
  height: 0.4rem;
  border-radius: 0.6rem;
`
const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.6rem;
`

export default function DurationBar({ audio }: { audio: HTMLAudioElement }) {

  const [ elapsedTime, setElapsedTime ] = useState(audio.currentTime)

  return (
    <div>
      <Bar>
        <ElapsedTime/>
      </Bar>
      <Duration>
        <span> { elapsedTime } </span>
        <span> 1:23 </span>
      </Duration>
    </div>
  )
}