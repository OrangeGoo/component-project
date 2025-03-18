import { useRef } from "react";
import { MessageProvider, MessageRef } from "./Message";

function App() {
  const messageRef = useRef<MessageRef>(null);

  return (
    <div>
      <MessageProvider ref={messageRef}></MessageProvider>
      <button
        onClick={() => {
          messageRef.current?.add({
            content: "请求成功",
          });
        }}
      >
        成功
      </button>
    </div>
  );
}

export default App;
