
import './App.css'
import FormSender from "./FormSender.tsx";
/*import Dziecko1 from "./Dziecko1.tsx";
import Dziecko2 from "./Dziecko2.tsx";*/
// import {useState} from "react";

function App() {

/*  const [msg, setMsg] = useState<string>("w oczekiwaniu w info od dziecka 1")

  function getMessage(msg: string) {
    console.log(msg)
    setMsg(msg)
  }*/

    function receiveForm() {

    }

    return (
    <>


      <FormSender sendForm={receiveForm}/>

      {/*      <Dziecko2 message={msg}/>
      <h2>To jest App Rodzic</h2>
    <Dziecko1 sendString={getMessage}/>*/}
    </>
  )
}

export default App
