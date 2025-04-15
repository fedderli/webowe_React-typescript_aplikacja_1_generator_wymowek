import './FormReceiver.css'

interface FormReceiverProps {
    excuseList: {text: string, urgent: boolean}[];

}



const FormReceiver = ({excuseList}: FormReceiverProps) => {
    return (
        <>
            <div id={"formReceiverCss"}>
                <h3>Twoje wymówki:</h3>
                <ul>
                    {excuseList.map((excuse, i) => (
                        <li key={i} style={{ color: excuse.urgent ? 'red' : 'white' }}>
                            {excuse.text}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FormReceiver;