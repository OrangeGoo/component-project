import { useEffect, useRef, useImperativeHandle } from "react";
import React from "react";

interface RefProps {
  aaa: () => void;
}

const OranegGoo = ({ ref }: { ref: React.Ref<RefProps> }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      aaa: () => {
        inputRef.current?.focus();
      },
    }),
    [inputRef]
  );

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

function App() {
  const ref = useRef<RefProps>(null);

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []);

  return (
    <div className="App">
      <OranegGoo ref={ref} />
    </div>
  );
}

export default App;
