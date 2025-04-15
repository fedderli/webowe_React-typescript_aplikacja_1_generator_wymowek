import './App.css'
import FormSender from "./FormSender.tsx";
import { useState } from "react";
import { MyFormData } from './FormSender';
import FormReceiver from "./FormReceiver.tsx";

interface ExcuseWithUrgency {
    text: string;
    urgent: boolean;
}


function App() {
    const [excuseList, setExcuseList] = useState<ExcuseWithUrgency[]>([]);
    const [formSent, setFormSent] = useState(false);
    function getForm(msg: MyFormData) {
        const trust = parseInt(msg.excuseTrustLevel);
        const creative = parseInt(msg.excuseCreativityLevel);

        let excuseReason = "nieznany powód";

        const isBetween = (val: number, min: number, max: number) => val >= min && val <= max;

        if (isBetween(trust, 1, 7) && isBetween(creative, 1, 7)) excuseReason = "zapomniałem, że istnieje";
        if (isBetween(trust, 1, 7) && isBetween(creative, 8, 14)) excuseReason = "zapomniałem, że pan istnieje";
        if (isBetween(trust, 1, 7) && isBetween(creative, 15, 21)) excuseReason = "zapomniałem wyłączyć żelazko";
        if (isBetween(trust, 1, 7) && isBetween(creative, 22, 28)) excuseReason = "pingwiny nie jedzą bakłażanów";
        if (isBetween(trust, 8, 14) && isBetween(creative, 1, 7)) excuseReason = "nie chciało mi się";
        if (isBetween(trust, 8, 14) && isBetween(creative, 8, 14)) excuseReason = "Łukasz tak powiedział";
        if (isBetween(trust, 8, 14) && isBetween(creative, 15, 21)) excuseReason = "nie mogę jeść bananów";
        if (isBetween(trust, 8, 14) && isBetween(creative, 22, 28)) excuseReason = "jakiś ryba do mnie zadzwonił";
        if (isBetween(trust, 15, 21) && isBetween(creative, 1, 7)) excuseReason = "ładna dzisiaj pogoda";
        if (isBetween(trust, 15, 21) && isBetween(creative, 8, 14)) excuseReason = "dawno pana nie widziałem";
        if (isBetween(trust, 15, 21) && isBetween(creative, 15, 21)) excuseReason = " dawno temu, gdy się obudziłem, postanowiłem zjeść trochę marmolady, ale okazało się, że marmolada wyszła z domu 12 sekund temu i nie zdążyłem się z nią pożegnać. To był mój najlepszy przyjaciel i bardzo mi go brakuje. 12 łososiów.";
        if (isBetween(trust, 15, 21) && isBetween(creative, 22, 28)) excuseReason = "zapomniałem zrobić wczoraj tego, co miałem zrobić dziś";
        if (isBetween(trust, 22, 28) && isBetween(creative, 1, 7)) excuseReason = "mam okres";
        if (isBetween(trust, 22, 28) && isBetween(creative, 8, 14)) excuseReason = "byłem na pogrzebie babci";
        if (isBetween(trust, 22, 28) && isBetween(creative, 15, 21)) excuseReason = "Z samego rana odebrałem telefon od znajomego astrofizyka, który potrzebował pomocy przy dekodowaniu anomalii w danych z teleskopu Jamesa Webba. Okazało się, że sygnał przypominał wzorzec matematyczny zbliżony do ciągu Fibonacciego, tylko że zapisany w systemie opartym na liczbach pierwszych. Zanim wspólnie obaliliśmy hipotezę kontaktu pozaziemskiego i wykluczyliśmy usterkę sprzętową, minęły dwie godziny. A potem jeszcze musiałem nakarmić kota, który chyba coś przeczuwał, bo patrzył na mnie jakby też znał ten szyfr.";
        if (isBetween(trust, 22, 28) && isBetween(creative, 22, 28)) excuseReason = "zapomniałem ile jezus łowi ryb";

        const excuse = `Ja, ${msg.excuseName} dopuściłem się czynu takiego jak ${msg.excuseType} w dniu ${msg.excuseDate}, ponieważ ${excuseReason}.`;
        setExcuseList(prev => [...prev,
            {
                text: excuse,
                urgent: msg.excuseUrgent,
            }]);
        setFormSent(true);

    }

    return (
        <>
            <h2>Generator wymówek</h2>
            <div id={"wholeWeb"}>
                <FormSender sendForm={getForm} />
                {formSent && <FormReceiver excuseList={excuseList} />}
            </div>
        </>
    );
}
export default App;