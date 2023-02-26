import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((cell) => {
        return (
          <span
            key={cell}
            className={`cell ${value ? value[cell].status : ""}`}
          >
            {value ? value[cell].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
