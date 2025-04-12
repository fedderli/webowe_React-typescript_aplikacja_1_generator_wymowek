
import { MyFormData } from './FormSender';


interface FormReceiverProps {
    message:MyFormData
}

const FormReceiver =({message}:FormReceiverProps) => {
    return (
        <>
            <p>{message.excuseName} | {message.excuseType} | {message.excuseTrustLevel} | {message.excuseDate} | {message.excuseCreativityLevel} | {message.excuseUrgent}</p>
        </>
    )
}

export default FormReceiver