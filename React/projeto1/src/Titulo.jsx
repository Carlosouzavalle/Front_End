function Titulo({nome, paragrafo, cor}) {
    return (
        <div>
            <h1 style={{color: cor}}> Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo
                ?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, excepturi!</p>
                :
                <p>Nada</p>
            }
        </div>
    )
}

export default Titulo