import { useState,useRef } from "react";

export default function Player() {
  const playerName = useRef()

  const [enteredPlayer, setEnteredPlayerName] = useState("");

  function handleClick() {
      setEnteredPlayerName(playerName.current.value);
      playerName.current.value="";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "unknown entitiy"} </h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Sett Name</button>
      </p>
    </section>
  );
}
