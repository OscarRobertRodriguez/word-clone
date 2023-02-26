import React from "react";

function Banner({ status = 'sad', guesses, answer }) {
  let glen = guesses.length; 

  return (
    <div className={`${status} banner`}>
      {status === "happy" ? (
        <p>
          <strong>Congratulations!</strong>
          Got it in <strong>{glen} {glen === 1 ? 'guess' : 'guesses'}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;


