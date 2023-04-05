import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Classe from './componentes/Classe/Classe';

function App() {
  const [classes, setClasses] = useState([
    {
      id: uuidv4(),
      nome: 'Assassino',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Caçador',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Guerreiro',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Guardião',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Mago',
      cor: '#82CFFA'
    }
  ])

  const [jogadores, setJogadores] = useState([])

  const deletarJogador = (id) =>{
    setJogadores(jogadores.filter(jogador => jogador.id !== id))
  }

  const mudarCorDaClasse = (id, cor) =>{
    setClasses(classes.map(classe => {
      if(classe.id === id){
        classe.cor = cor
      }

      return classe
    }))
  }

  return (

    <div className="App">
      <Banner></Banner>

      <Formulario 
        nomeDaClasse={classes.map(classe => classe.nome)}
        novoJogador={jogador => setJogadores([...jogadores, jogador])}>
      </Formulario>

      {classes.map(
        classe => 
        <Classe
          mudarCor={mudarCorDaClasse}
          nomeDaClasse={classe.nome}
          key={classe.id}
          cor={classe.cor}
          idDaClasse={classe.id}
          jogadores={jogadores.filter(jogador => jogador.classe == classe.nome)}
          aoDeletar={deletarJogador}>
        </Classe>)}
    </div>
  );
}

export default App;
