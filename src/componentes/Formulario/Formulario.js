import { useState } from 'react'
import Botao from '../Botao/Botao'
import Input from '../Input/Input'
import Selecao from '../Selecao/Selecao'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario({nomeDaClasse, novoJogador}){
    const [nome, setNome] = useState()
    const [classe, setClasse] = useState()
    const [imagem, setImagem] = useState('https://th.bing.com/th/id/OIP.Rd5hFXIRSSSs2QlhXAzk_QHaHa?pid=ImgDet&rs=1')

    const aoSalvar = (e) =>{
        e.preventDefault()
        novoJogador({
            id: uuidv4(),
            nome,
            classe,
            imagem
        })
    }

    return(
        <section className='formulario__secao'>
            <h2 className='formulario__titulo'>Preencha o formulário para criar o card</h2>
            <form className='formulario' onSubmit={aoSalvar}>
                <Input
                    type='text' 
                    label='Nome'
                    placeholder='Informe seu nome/apelido'
                    obrigatorio={true}
                    valor={nome}
                    valorSalvo={valor => setNome(valor)}>
                </Input>

                <Selecao
                    label='Classe'
                    obrigatorio={true}
                    nomeDaClasse={nomeDaClasse}
                    valor={classe}
                    valorSalvo={valor => setClasse(valor)}>
                </Selecao>

                <Input
                    type='text'
                    label='Imagem' 
                    placeholder='Informe a URL da imagem'
                    obrigatorio={false}
                    valor={imagem}
                    valorSalvo={valor => setImagem(valor)}>
                </Input>

                <Botao 
                    texto='Criar Card'>
                </Botao>
            </form>
        </section>
    )
}

export default Formulario