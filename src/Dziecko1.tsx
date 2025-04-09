import {useState} from "react";
interface Dziecko1Props{
    sendString: (text:string) => void
}

const Dziecko1 = ({sendString}: Dziecko1Props) => {

    const [text , setText] = useState<string>("")
// { imie: text, nazwisko: text2 }

    return(
        <>
            <h3>Pod spodem jest dziecko 1</h3>
            <input type={"text"}
                   value={text}
                   onChange={event => setText(event.target.value)}/>
            <button onClick={()=> sendString(text)}>Send to APP</button>
        </>
    )
}

export default Dziecko1