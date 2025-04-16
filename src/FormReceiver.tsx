import './FormReceiver.css'
import {useState} from "react";
import {ExcuseWithUrgency} from "./App.tsx";

interface FormReceiverProps {
    MyexcuseList: {text: string, urgent: boolean}[];

}



const FormReceiver = ({MyexcuseList}: FormReceiverProps) => {


    const [excuseList, setExcuseList] = useState<ExcuseWithUrgency[]>(()=> {
        const saved = localStorage.getItem("excuseList");
        return saved ? JSON.parse(saved) : [];
    });

    function editExcuse( index: number) {
        const updatedExcuse = prompt(`Chesz zmienic element , podaj nowy element`)
        if(updatedExcuse !== null && updatedExcuse.trim() !== ""){
            const updatedExcuseList = [...excuseList];
            updatedExcuseList[index] = {
                ...updatedExcuseList[index],
                text: updatedExcuse,
            }
            localStorage.setItem("excuseList", JSON.stringify(updatedExcuseList))
            setExcuseList(updatedExcuseList)
        }
    }

    return (
        <>
            <div id={"formReceiverCss"}>
                <h3>Twoje wymówki:</h3>
                <ul>
                    {MyexcuseList.map((excuse, i) => (
                        <li key={i} onClick={() => editExcuse(i)}
                            style={{ color: excuse.urgent ? 'red' : 'white' }}>
                            {excuse.text}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FormReceiver;