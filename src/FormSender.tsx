import {useState} from "react";
import './FormSender.css'
interface FormSenderProps{
    sendForm:(formData:MyFormData) => void
}

export interface MyFormData{
    excuseName: string;
    excuseType: string;
    excuseTrustLevel: string;
    excuseDate: string;
    excuseCreativityLevel: string;
    //comment: string;
    excuseUrgent: boolean;
}
const FormSender = ({sendForm} : FormSenderProps) =>{
    function handleSubmit(a: React.FormEvent) {
        a.preventDefault()
        //alert(JSON.stringify(formData))
        sendForm(formData)
    }

    const[formData, setFormData] = useState<MyFormData>({excuseName:"", excuseType:"", excuseTrustLevel:"", excuseDate:"", excuseCreativityLevel:"", excuseUrgent: false});

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
                        name={"excuseName"}
                        value={formData.excuseName}
                        onChange={handleChange}
                    />
                </label>

                <label className={"formElement"}>
                    Typ wymówki:
                    <select name={"excuseType"}
                            value={formData.excuseType}
                            onChange={handleChange}>
                        <option disabled>Wybierz</option>
                        <option>Spóźnienie</option>
                        <option>Brak pracy domowej</option>
                        <option>Oblanie nauczyciela wodą w proszku</option>
                        <option>Spanie na lekcji</option>
                    </select>
                </label>

                <label className={"formElement"}>
                    Poziom wiarygodności(1-28):
                    <input
                           type="range"
                           name={"excuseTrustLevel"}
                           value={formData.excuseTrustLevel}
                           onChange={handleChange}
                           min="1"
                           max="28"
                           step="1"
                    >
                    </input>
                </label>
                <label className={"formElement"}>
                    Data zdarzenia:
                    <input type="date"
                    name="excuseDate"
                    value={formData.excuseDate}
                    onChange={handleChange}
                    />
                </label>

                <label className={"formElement"}>
                    Poziom kreatywności(1-28):
                    <input type="range"
                           name="excuseCreativityLevel"
                           value={formData.excuseCreativityLevel}
                           onChange={handleChange}
                           min="1"
                           max="28"
                           step="1"
                    />
                </label>
                {/*<label className={"formElement"}>
                    Komentarzenie:
                    <textarea name="comment"
                              value={formData.comment}
                              onChange={handleChange}

                    />
                </label>*/}
                <label className={"formElement"}>
                    Czy wymówka jest pilna:
                    <input type="checkbox"
                           name={"excuseUrgent"}
                           checked={formData.excuseUrgent}
                           onChange={handleChange}
                    />
                </label>

                <label className={"formElement"} id="buttonSubmit">
                    <button type="submit"
                            >
                            Wyślij Formularz</button>
                </label>
            </form>
        </>
    )
}

export default FormSender


