import { useState } from "react"
import Banner from "./componentes/Banner/Banner"
import Formulario from "./componentes/Formulario/Formulario"
import Time from "./componentes/Time/Time"
import Rodape from "./componentes/Rodape/Rodape"


function App() {

  const times = [ 
    {
      nome:"Técnico em instalações",
      corPrimaria:"#57c278",
      corSecundaria:"#D9F7E9"
    },
    {
      nome:"Técnico em eletrônica",
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8F8FF"
    },
    {
      nome:"Equipe de Infraestrutura e lançamento",
      corPrimaria:"#A6D157",
      corSecundaria:"#F0F8E2"
    },
    {
      nome:"Gestão de serviços",
      corPrimaria:"#E06B69",
      corSecundaria:"#FDE7E8"
    },
    {
      nome:"Serviços Gerais",
      corPrimaria:"#FFBA05",
      corSecundaria:"#FFF5D9"
    },
  ]
  

  const [colaboradores, setColaboradores] = useState([])

    const novoColaborador = (colaborador) => {
      console.log( colaborador)
      setColaboradores([...colaboradores, colaborador])
    }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => {return time.nome})} aoColaboradorCadastrado={colaborador => novoColaborador(colaborador)} />    
  
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)} 
      
      <Rodape /> 
    </div>
  )
}

export default App
