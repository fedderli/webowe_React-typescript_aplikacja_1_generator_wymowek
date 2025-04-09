
import './App.css'
import Dziecko1 from "./Dziecko1.tsx";
import Dziecko2 from "./Dziecko2.tsx";
import {useState} from "react";

function App() {

  const [msg, setMsg] = useState<string>("w oczekiwaniu w info od dziecka 1")

  function getMessage(msg: string) {
    console.log(msg)
    setMsg(msg)
  }

  return (
    <>
      <Dziecko2 message={msg}/>
      <h2>To jest App Rodzic</h2>
    <Dziecko1 sendString={getMessage}/>
    </>
  )
}

export default App
