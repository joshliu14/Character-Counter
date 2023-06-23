import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleChange = (event) => {
      let value = event.target.value;
      setText(value)
    };

  const handleCount = async () => {
    try {
      const response = await fetch("http://localhost:8000/count", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setCharCount(data.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div>
        <h1>Character Counter</h1>
        <textarea value={text} onChange={handleChange} />
        <button onClick={handleCount}>Count Characters</button>
        <h2>Count: {charCount}</h2>
      </div>
  );
}

export default App;