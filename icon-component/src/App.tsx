import { IconAdd } from "./icon/icons/IconAdd";
import { IconEmail } from "./icon/icons/IconEmail";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <IconAdd size="40px"></IconAdd>
      <IconEmail spin></IconEmail>
      <IconEmail style={{ color: "blue", fontSize: "50px" }}></IconEmail>
    </div>
  );
}

export default App;
