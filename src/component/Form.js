import {useEffect, useState } from "react";

export default function Form({ validCard }) {
  let [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    validCard(input);
  }
  useEffect( () => {
    validCard();
  },[input]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button>Check</button>
      </form>
    </div>
  );
}
