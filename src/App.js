import CompCounter from "./components/CompCounter";
import { useState } from "react";

function App() {
  const [isVisible,SetIsVisible]=useState(true)
  return <div className="App">
    {isVisible && <CompCounter />}

    <br/>

    <button onClick={()=>SetIsVisible(!isVisible)}>Toogle Counter</button>
  </div>;
}

export default App;
