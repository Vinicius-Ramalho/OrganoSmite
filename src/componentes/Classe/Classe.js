import Jogador from '../Jogador/Jogador';
import './Classe.css'
import hexToRgba from 'hex-to-rgba';

function Classe({nomeDaClasse, cor, idDaClasse, jogadores, aoDeletar, mudarCor}){
    return(
        (jogadores.length > 0) ?
        <section className='classe__secao' style={{backgroundColor: hexToRgba(cor, 0.3)}}>
            <h3 className='classe__titulo' style={{color: cor}}>{nomeDaClasse}</h3>
            <input
                onChange={e => mudarCor(idDaClasse, e.target.value)}
                type='color' 
                value={cor} 
                className='classe__cor'>
            </input>
            <div className='classe__cards'>
                {jogadores.map(
                    jogador => 
                    <Jogador
                        nome={jogador.nome}
                        key={jogador.id}
                        imagem={jogador.imagem}
                        cor={cor}
                        nomeDaClasse={nomeDaClasse}
                        id={jogador.id}
                        aoDeletar={aoDeletar}>
                    </Jogador>)}
            </div>
        </section>
        : ''
    )
}

export default Classe