
import './App.css'
import FormSender from "./FormSender.tsx";
/*import Dziecko1 from "./Dziecko1.tsx";
import Dziecko2 from "./Dziecko2.tsx";*/
 import {useState} from "react";
import { MyFormData } from './FormSender';
import FormReceiver from "./FormReceiver.tsx";

function App() {

/*  const [msg, setMsg] = useState<string>("w oczekiwaniu w info od dziecka 1")

  function getMessage(msg: string) {
    console.log(msg)
    setMsg(msg)
  }*/

   /* const getForm = (message:
    MyFormData) => {
    console.log(message);
    }*/
    const [Message, setMessage] = useState<MyFormData>({excuseName:"", excuseType:"", excuseTrustLevel:"", excuseDate:"", excuseCreativityLevel:"", excuseUrgent: false});
    function getForm(msg: MyFormData) {
        setMessage(msg)
    }

    console.log("mariusz")
    return (
    <>
        <h2>Generator wymówek</h2>

        <FormSender sendForm={getForm}/>
        <FormReceiver message={Message} />

      {/*      <Dziecko2 message={msg}/>
      <h2>To jest App Rodzic</h2>
    <Dziecko1 sendString={getMessage}/>*/}
    </>
  )
}

export default App
