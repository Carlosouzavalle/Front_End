import Titulo from "./Titulo"

function App() {
  let nome =  'carlos'
  const urlimg = "https://i.pinimg.com/originals/1a/8a/97/1a8a97fb3f91d89ad5fcf7e1de523074.gif"



  return (
    <div>
      <h1>Hello World!</h1>
      <p>Olá sou o {nome}</p>
      <img src={urlimg}/>
      < Titulo/>
    </div>
  )
}

//Aqui estamos exportando o App 
export default App