import {useState} from "react";
import './FormSender.css'

interface FormData{
    name: string;
    excuseType: string;
}

const FormSender = () =>{
    function handleSubmit() {

    }

    const[formData, setFormData] =useState<FormData>({name:"", excuseType:""})


    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const {name, value ,type, checked }=e.target as HTMLInputElement;
        setFormData(prev=>({...prev,
            [name]: type === "checkbox" ? checked: value
        }))

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label className={"formElement"}>
                    Imie:
                    <input

                        type={"text"}
                        name={"name"}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label className={"formElement"}>
                    Typ wymówki:
                    <select name={"excuseType"} value={FormData.excuseType} onChange={handleChange}>
                        <option value={""}>Wybierz</option>
                        <option value={"spoznienie"}>Spóźnienie</option>
                        <option value={"brakPracyDomowej"}>Brak pracy domowej</option>
                    </select>
                </label>
            </form>
        </>
    )
}

export default FormSender