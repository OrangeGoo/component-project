import { useRef, useEffect } from "react";
import React from "react";

const OrangeGoo = ({ ref }: { ref: React.Ref<HTMLInputElement> }) => {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("ref", inputRef.current);
    inputRef.current?.focus();
  });

  return (
    <div className="App">
      <OrangeGoo ref={inputRef} />
    </div>
  );
}

export default App;
