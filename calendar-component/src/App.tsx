import dayjs from "dayjs";
import Calendar from "./Calendar";
import { useState } from "react";

function App() {
  // const [value, setValue] = useState(dayjs("2023-11-08"));

  return (
    <div className="App">
      <Calendar
        defaultValue={dayjs("2023-11-08")}
        locale="en-US"
        // dateInnerContent={(value) => {
        //   return (
        //     <div>
        //       <p style={{ background: "yellowgreen", height: "50px" }}>
        //         {value.format("YYYY/MM/DD")}
        //       </p>
        //     </div>
        //   );
        // }}
        // onChange={(date) => {
        //   alert(date.format("YYYY-MM-DD"));
        //   setValue(date);
        // }}
      ></Calendar>
    </div>
  );
}

export default App;
