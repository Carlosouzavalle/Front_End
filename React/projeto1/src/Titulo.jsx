import { useState } from "react"
import ImgSSJ from "./ImgSSJ"

function Titulo({cor}) {
    const [texto, setTexto] = useState(" titulo inicial")
    const [inputText, setInpuText] = useState("")

    function clicou() {
        setTexto(inputText)
    }

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <input value={inputText} onChange={(e) =>{setInpuText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
            <ImgSSJ />
        </div>
    )
}

export default Titulo