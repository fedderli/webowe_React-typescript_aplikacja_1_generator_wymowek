import {useState} from "react";
import './FormSender.css'

interface FormSenderProps {
    sendForm: (formData: MyFormData) => void
}



export interface MyFormData {
    excuseName: string;
    excuseType: string;
    excuseTrustLevel: string;
    excuseDate: string;
    excuseCreativityLevel: string;
    //comment: string;
    excuseUrgent: boolean;
    submitCount: number;
}


export function MyhandleSubmit() {

}

const FormSender = ({sendForm}: FormSenderProps) => {
    function handleSubmit(a: React.FormEvent) {
        a.preventDefault()
        //alert(JSON.stringify(formData))
        formData.submitCount++
        sendForm(formData)
    }

    const [formData, setFormData] = useState<MyFormData>({
        excuseName: "",
        excuseType: "Spóźnienie",
        excuseTrustLevel: "14",
        excuseDate: "",
        excuseCreativityLevel: "14",
        excuseUrgent: false,
        submitCount: 0

    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const {name, value, type, checked} = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))

    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <label className={"formElement"}>
                    Imie:
                    <input
                        //required
                        type={"text"}
                        name={"excuseName"}
                        value={formData.excuseName}
                        onChange={handleChange}
                    />
                </label>

                <label className={"formElement"}>
                    Typ wymówki:
                    <select name={"excuseType"} className={"inter"}
                            value={formData.excuseType}
                            onChange={handleChange}
                    >
                        <option>spóźnienie</option>
                        <option>brak pracy domowej</option>
                        <option>oblanie nauczyciela wodą w proszku</option>
                        <option>spanie na lekcji</option>
                    </select>
                </label>

                <label className={"formElement"}>
                    Poziom wiarygodności:
                    <input
                        type="range" className={"rangeStyle"}
                        name={"excuseTrustLevel"}
                        value={formData.excuseTrustLevel}
                        onChange={handleChange}
                        min="1"
                        max="28"
                        step="1"
                    >
                    </input>
                    {formData.excuseTrustLevel}
                </label>
                <label className={"formElement"}>
                    Data zdarzenia:
                    <input
                        //required
                        type="date"
                        name="excuseDate"
                        value={formData.excuseDate}
                        onChange={handleChange}
                    />
                </label>

                <label className={"formElement"}>
                    Poziom kreatywności:
                    <input type="range" className={"rangeStyle"}
                           name="excuseCreativityLevel"
                           value={formData.excuseCreativityLevel}
                           onChange={handleChange}
                           min="1"
                           max="28"
                           step="1"
                    />
                    {formData.excuseCreativityLevel}
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
                    <button type={"submit"}
                            onClick={MyhandleSubmit}
                    >
                        Wyślij Formularz
                    </button>
                </label>
            </form>
        </>
    )
}

export default FormSender




