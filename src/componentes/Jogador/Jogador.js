import './Jogador.css'
import {RiCloseCircleLine} from 'react-icons/ri'

function Jogador({nome, imagem, cor, nomeDaClasse, id, aoDeletar}){
    return(
        <div className='jogador__card'>
            <RiCloseCircleLine 
                className='jogador__icon' 
                size={30} onClick={() => aoDeletar(id)}>
            </RiCloseCircleLine>
            <div className='jogador__cabecalho' style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome} className='jogador__imagem'></img>
            </div>
            <div className='jogador__conteudo'>
                <h4 className='jogador__nome'>{nome}</h4>
                <h4 className='jogador__classe'>{nomeDaClasse}</h4>
            </div>
        </div>
    )
}

export default Jogador