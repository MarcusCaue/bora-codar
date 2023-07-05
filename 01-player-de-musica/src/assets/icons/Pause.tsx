import { MouseEventHandler } from "react";

export default function Pause({ actionFunction } : { actionFunction : MouseEventHandler }) {
  return (
    <button onClick={actionFunction} >
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6369 24.9513H9.93606C9.69729 24.9513 9.4683 24.8564 9.29947 24.6876C9.13063 24.5188 9.03578 24.2898 9.03578 24.051V6.04545C9.03578 5.80668 9.13063 5.57769 9.29947 5.40886C9.4683 5.24002 9.69729 5.14517 9.93606 5.14517H12.6369C12.8757 5.14517 13.1047 5.24002 13.2735 5.40886C13.4423 5.57769 13.5372 5.80668 13.5372 6.04545V24.051C13.5372 24.2898 13.4423 24.5188 13.2735 24.6876C13.1047 24.8564 12.8757 24.9513 12.6369 24.9513Z" fill="#E1E1E6" />
        <path d="M20.7394 24.9513H18.0386C17.7998 24.9513 17.5708 24.8564 17.402 24.6876C17.2331 24.5188 17.1383 24.2898 17.1383 24.051V6.04545C17.1383 5.80668 17.2331 5.57769 17.402 5.40886C17.5708 5.24002 17.7998 5.14517 18.0386 5.14517H20.7394C20.9782 5.14517 21.2072 5.24002 21.376 5.40886C21.5448 5.57769 21.6397 5.80668 21.6397 6.04545V24.051C21.6397 24.2898 21.5448 24.5188 21.376 24.6876C21.2072 24.8564 20.9782 24.9513 20.7394 24.9513Z" fill="#E1E1E6" />
      </svg>
    </button>
  )
} 