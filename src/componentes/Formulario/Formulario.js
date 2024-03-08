import { useState } from "react"
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {


  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      document,
      imagem,
      time
    })
    setNome('')
    setDocument('')
    setImagem('')
    setTime("")
  }

  const [nome, setNome] = useState ('')
  const [document, setDocument] = useState ('')
  const [imagem, setImagem] = useState ('')
  const [time, setTime] = useState ('')
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome"
            valor = {nome}
            aoAlterado = {valor => setNome(valor)}
        
        />
          <CampoTexto 
            obrigatorio={true} 
            label="RG ou CPF" 
            placeholder="Digite seu documento" 
            valor= {document}
            aoAlterado= {valor => setDocument(valor)}
          />
        
        <CampoTexto 
            label="Imagem" 
            placeholder="Informe o endereço da imagem" 
            valor ={imagem}
            aoAlterado= {valor => setImagem(valor)}
          />
         
        <ListaSuspensa 
            obrigatorio={true} 
            label="Times" 
            itens={props.times}
            valor ={time}
            aoAlterado = {valor => setTime(valor)}
            />

        <Botao texto="Criar card" />
      </form>
    </section>
  )
}

export default Formulario
