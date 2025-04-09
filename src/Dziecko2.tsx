interface Dziecko2Props{
    message:string
}


const Dziecko2 = ({message}: Dziecko2Props) =>{
    return(
        <>
            <h2>dzeiecko 2</h2>
            <h3>pod spodem jest miejsce na wiadomosc od dziecka 1</h3>
            <p>{message}</p>
        </>

    )
}

export default Dziecko2