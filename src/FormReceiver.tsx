
import {MyFormData, MyhandleSubmit} from './FormSender';
import {useState} from "react";


interface FormReceiverProps {
    message:MyFormData
}




const isBetween = (value:number, min:number, max:number) => value >= min && value <= max;

const FormReceiver =({message}:FormReceiverProps) => {
    //const excuseList: string[] = []
    const [excuseList, setExcuseList] = useState<string[]>([]);

    let excuseTrustLevelInt:number = 14;
       excuseTrustLevelInt = parseInt(message.excuseTrustLevel)
    let excuseCreativityLevelInt:number = 14;
       excuseCreativityLevelInt= parseInt(message.excuseCreativityLevel)
    let excuseReason;

    if (isBetween(excuseTrustLevelInt, 1, 7) && isBetween(excuseCreativityLevelInt, 1, 7)){excuseReason = "zapomniałem, że istnieje"}
    if (isBetween(excuseTrustLevelInt, 1, 7) && isBetween(excuseCreativityLevelInt, 8, 14)){excuseReason = "zapomniałem, że pan istnieje"}
    if (isBetween(excuseTrustLevelInt, 1, 7) && isBetween(excuseCreativityLevelInt, 15, 21)){excuseReason = "zapomniałem wyłączyć żelazko"}
    if (isBetween(excuseTrustLevelInt, 1, 7) && isBetween(excuseCreativityLevelInt, 22, 28)){excuseReason = "pingwniny nie jedzą bakłażanów"}
    if (isBetween(excuseTrustLevelInt, 8, 14) && isBetween(excuseCreativityLevelInt, 1, 7)){excuseReason = "nie chciało mi się"}
    if (isBetween(excuseTrustLevelInt, 8, 14) && isBetween(excuseCreativityLevelInt, 8, 14)){excuseReason = "łukasz tak powiedział"}
    if (isBetween(excuseTrustLevelInt, 8, 14) && isBetween(excuseCreativityLevelInt, 15, 21)){excuseReason = "nie mogę jeść bananów"}
    if (isBetween(excuseTrustLevelInt, 8, 14) && isBetween(excuseCreativityLevelInt, 22, 28)){excuseReason = "jakiś ryba do mnie zadzwonił"}
    if (isBetween(excuseTrustLevelInt, 15, 21) && isBetween(excuseCreativityLevelInt, 1, 7)){excuseReason = "ładna dzisiaj pogoda"}
    if (isBetween(excuseTrustLevelInt, 15, 21) && isBetween(excuseCreativityLevelInt, 8, 14)){excuseReason = "dawno pana nie widziałem"}
    if (isBetween(excuseTrustLevelInt, 15, 21) && isBetween(excuseCreativityLevelInt, 15, 21)){excuseReason = `dawno temu, gdy się obudziłem, postanowiłem zjeść trochę marmolady, ale okazało się, że marmolada wyszła z domu 12 sekund temu i nie zdążyłem się z nią pożegnać. To był mój najlepszy przyjaciel i bardzo mi go brakuje. 12 łososiów.`}
    if (isBetween(excuseTrustLevelInt, 15, 21) && isBetween(excuseCreativityLevelInt, 22, 28)){excuseReason = "zapomniałem zrobić wczoraj tego, co miałem zrobić dziś"}
    if (isBetween(excuseTrustLevelInt, 22, 28) && isBetween(excuseCreativityLevelInt, 1, 7)){excuseReason = "mam okres"}
    if (isBetween(excuseTrustLevelInt, 22, 28) && isBetween(excuseCreativityLevelInt, 8, 14)){excuseReason = "byłem na pogrzebie babci"}
    if (isBetween(excuseTrustLevelInt, 22, 28) && isBetween(excuseCreativityLevelInt, 15, 21)){excuseReason = "Z samego rana odebrałem telefon od znajomego astrofizyka, który potrzebował pomocy przy dekodowaniu anomalii w danych z teleskopu Jamesa Webba. Okazało się, że sygnał przypominał wzorzec matematyczny zbliżony do ciągu Fibonacciego, tylko że zapisany w systemie opartym na liczbach pierwszych. Zanim wspólnie obaliliśmy hipotezę kontaktu pozaziemskiego i wykluczyliśmy usterkę sprzętową, minęły dwie godziny. A potem jeszcze musiałem nakarmić kota, który chyba coś przeczuwał, bo patrzył na mnie jakby też znał ten szyfr."}
    if (isBetween(excuseTrustLevelInt, 22, 28) && isBetween(excuseCreativityLevelInt, 22, 28)){excuseReason = "zapomniałem ile jezus łowi ryb"}


// Ja, {excuseName} dopuściłem się czynu takiego jak {excuseType} w dniu {excuseDate}, ponieważ {excuseReason}


    let excuse = "";
    excuse = `Ja, ${message.excuseName} dopuściłem się czynu takiego jak ${message.excuseType} w dniu ${message.excuseDate}, ponieważ ${excuseReason}.`
    //setExcuseList(prev => [...prev, excuse])


    // MyhandleSubmit()
    // {
    //     setExcuseList(prev => [...prev, excuse]);
    // }



    return (
        <>
            <ul>
            {excuseList.map((excuse,i ) =>(
                <li key={i}>{excuse}</li>
                ))}

            </ul>
        </>
    )
}


export default FormReceiver
