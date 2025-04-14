import './FormReceiver.css'

interface FormReceiverProps {
    excuseList: string[],

}



const FormReceiver = ({excuseList}: FormReceiverProps) => {
    return (
        <>
            <div id={"formReceiverCss"}>
                <h3>Twoje wymówki:</h3>
                <ul>
                    {excuseList.map((excuse, i) => (
                        <li key={i} >{excuse}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FormReceiver;