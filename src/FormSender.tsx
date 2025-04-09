import {useState} from "react";

interface FormData{
    name: string;
}

const FormSender = () =>{
    function handleSubmit() {

    }

    const[formData, setFormData] =useState<FormData>({name:""})


    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const {name, value ,type, checked }=e.target as HTMLInputElement;
        setFormData(prev=>({...prev,
            [name]: type === "checkbox" ? checked: value
        }))

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Imie:
                    <input
                        type={"text"}
                        name={"name"}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </>
    )
}

export default FormSender